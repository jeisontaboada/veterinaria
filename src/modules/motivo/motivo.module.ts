import { Module } from '@nestjs/common';
import { MotivoService } from './motivo.service';
import { MotivoController } from './motivo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Motivo } from './entities/motivo.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Motivo])],
  controllers: [MotivoController],
  providers: [MotivoService],
})
export class MotivoModule {}
