import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMotivoDto } from './dto/create-motivo.dto';
import { UpdateMotivoDto } from './dto/update-motivo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Motivo } from './entities/motivo.entity';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class MotivoService {
  constructor(
    @InjectRepository(Motivo) private readonly repo: Repository<Motivo>,
  ) {}
  async create(createMotivoDto: CreateMotivoDto) {
    const { detalleMotivo } = createMotivoDto;
    const motivo = await this.IfExistsName(detalleMotivo);

    const crearMotivo = this.repo.create(createMotivoDto);
    await this.repo.save(crearMotivo);

    return crearMotivo;
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: number) {
    const motivo = await this.repo.findOne({ where: { id } });

    if (!motivo) {
      throw new NotFoundException('No existe el motivo');
    }
    return motivo;
  }

  async IfExistsName(detalleMotivo: string) {
    const motivo = await this.repo.findOne({ where: { detalleMotivo } });
    if (motivo) {
      throw new NotFoundException('Ya existe un motivo con este detalle');
    }
  }
  async update(id: number, updateMotivoDto: UpdateMotivoDto) {
    const motivoExist = await this.findOne(id);

    const motivoDuplicado = await this.IfExistsName(
      updateMotivoDto.detalleMotivo,
    );


     const actualizarMotivo= await this.repo.preload( { id: id , ...updateMotivoDto} );

     await this.repo.save(actualizarMotivo)
     return await this.findOne(id);
  }

  async remove(id: number) {
    const movito = await this.findOne(id);

    return await this.repo.delete(movito);
  }
}
