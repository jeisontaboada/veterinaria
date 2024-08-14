import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { TipoUsuario } from './entities/tipo-usuario.entity';

@Module({
  exports:[UsuarioService],
  imports:[TypeOrmModule.forFeature([Usuario,TipoUsuario])],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
