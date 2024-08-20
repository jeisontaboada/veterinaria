import { Injectable } from '@nestjs/common';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cita } from './entities/cita.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CitaService {
  constructor(
    @InjectRepository(Cita) private readonly repo: Repository<Cita>,
  ) {}
  create(createCitaDto: CreateCitaDto) {
    return 'This action adds a new cita';
  }

  async findAll() {
    return (await this.repo.find()).map((cita) => {
      return {
        cita: cita.numCita,
        cliente: cita.cliente.nombre,
        mascota: cita.cliente.mascota.map((mascota) => {
          return {
            nombre: mascota.nombre,
            especie: mascota.especie,
            motivo: mascota.motivo.detalleMotivo,
          };
        }),
      };
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} cita`;
  }

  update(id: number, updateCitaDto: UpdateCitaDto) {
    return `This action updates a #${id} cita`;
  }

  remove(id: number) {
    return `This action removes a #${id} cita`;
  }
}
