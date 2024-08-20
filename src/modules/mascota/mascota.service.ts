import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { Repository } from 'typeorm';
import { Mascota } from './entities/mascota.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Motivo } from '../motivo/entities/motivo.entity';
import { Usuario } from '../usuario/entities/usuario.entity';

@Injectable()
export class MascotaService {
  constructor(
    @InjectRepository(Mascota) private readonly repo: Repository<Mascota>,
    @InjectRepository(Motivo) private readonly repoMotivo: Repository<Motivo>,
    @InjectRepository(Usuario) private readonly repoUsuario: Repository<Usuario>,
  ) {}
  async create(createMascotaDto: CreateMascotaDto) {
    // Verificar si el usuario existe
    const usuario = await this.repoUsuario.findOne({
      where: { id: createMascotaDto.idusuario },
    });

    if (!usuario) {
      throw new NotFoundException('Usuario no encontrado');
    }
    // Verificar si el motivo ya existe
    let motivo = await this.repoMotivo.findOne({
      where: { detalleMotivo: createMascotaDto.idmotivo },
    });

    // Si no existe, crearlo
    if (!motivo) {
      motivo = this.repoMotivo.create({
        detalleMotivo: createMascotaDto.idmotivo,
      });
      await this.repoMotivo.save(motivo);
    }

    // Crear la mascota con el motivo y usuario relacionados
    const mascota = this.repo.create({
      nombre: createMascotaDto.nombre,
      raza: createMascotaDto.raza,
      edad: createMascotaDto.edad,
      especie: createMascotaDto.especie,
      motivo: motivo, // Asignando el objeto motivo a idmotivo
      usuario: usuario,
    });

    // Guardar la mascota en la base de datos
    await this.repo.save(mascota);
    return mascota;
  }

  async findAll() {
    return (await this.repo.find({ relations: ['usuario'] })).map(
      (mascota) => {
        return {
          nombre: mascota.nombre,
          raza: mascota.raza,
          edad: mascota.edad,
          especie: mascota.especie,
          motivo: mascota.motivo?.detalleMotivo,
          usuario: mascota?.usuario?.nombre || 'No tiene dueño',
        };
      },
    );
  }

  async findOne(id: number) {
    const mascota = await this.repo.findOne({ where: { id } });

    if (!mascota) {
      throw new NotFoundException('No existe la mascota');
    }
  }

  async findTipoMascota(id: number) {
    const tipoUsuario = await this.repo.findOne({ where: { id } });
    if (!tipoUsuario) {
      throw new NotFoundException('El tipo usuario no existe');
    }

    return tipoUsuario;
  }
  update(id: number, updateMascotaDto: UpdateMascotaDto) {
    return `This action updates a #${id} mascota`;
  }

  remove(id: number) {
    return `This action removes a #${id} mascota`;
  }
}
