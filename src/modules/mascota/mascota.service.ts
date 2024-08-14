import { Injectable } from '@nestjs/common';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { Repository } from 'typeorm';
import { Mascota } from './entities/mascota.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MascotaService {
  constructor(
    @InjectRepository(Mascota) private readonly repo: Repository<Mascota>,
  ) {}
  create(createMascotaDto: CreateMascotaDto) {
    return 'This action adds a new mascota';
  }

  async findAll() {
   return await this.repo.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} mascota`;
  }

  update(id: number, updateMascotaDto: UpdateMascotaDto) {
    return `This action updates a #${id} mascota`;
  }

  remove(id: number) {
    return `This action removes a #${id} mascota`;
  }
}
