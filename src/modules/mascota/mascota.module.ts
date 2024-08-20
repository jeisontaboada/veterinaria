import { Module } from '@nestjs/common';
import { MascotaService } from './mascota.service';
import { MascotaController } from './mascota.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mascota } from './entities/mascota.entity';
import { Motivo } from '../motivo/entities/motivo.entity';
import { Usuario } from '../usuario/entities/usuario.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Mascota,Motivo,Usuario])],
  controllers: [MascotaController],
  providers: [MascotaService],
})
export class MascotaModule {}
