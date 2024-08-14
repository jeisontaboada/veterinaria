import { Injectable } from '@nestjs/common';
import { CreateJeisonDto } from './dto/create-jeison.dto';
import { UpdateJeisonDto } from './dto/update-jeison.dto';

@Injectable()
export class JeisonService {
  create(createJeisonDto: CreateJeisonDto) {
    return 'This action adds a new jeison';
  }

  findAll() {
    return `This action returns all jeison`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jeison`;
  }

  update(id: number, updateJeisonDto: UpdateJeisonDto) {
    return `This action updates a #${id} jeison`;
  }

  remove(id: number) {
    return `This action removes a #${id} jeison`;
  }
}
