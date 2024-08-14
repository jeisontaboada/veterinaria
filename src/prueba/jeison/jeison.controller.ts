import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { JeisonService } from './jeison.service';
import { CreateJeisonDto } from './dto/create-jeison.dto';
import { UpdateJeisonDto } from './dto/update-jeison.dto';

@Controller()
export class JeisonController {
  constructor(private readonly jeisonService: JeisonService) {}

  @MessagePattern('createJeison')
  create(@Payload() createJeisonDto: CreateJeisonDto) {
    return this.jeisonService.create(createJeisonDto);
  }

  @MessagePattern('findAllJeison')
  findAll() {
    return this.jeisonService.findAll();
  }

  @MessagePattern('findOneJeison')
  findOne(@Payload() id: number) {
    return this.jeisonService.findOne(id);
  }

  @MessagePattern('updateJeison')
  update(@Payload() updateJeisonDto: UpdateJeisonDto) {
    return this.jeisonService.update(updateJeisonDto.id, updateJeisonDto);
  }

  @MessagePattern('removeJeison')
  remove(@Payload() id: number) {
    return this.jeisonService.remove(id);
  }
}
