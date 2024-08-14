import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoUsuario } from './entities/tipo-usuario.entity';

@Injectable()
export class UsuarioService {
  
  constructor(
    @InjectRepository(Usuario) private readonly repo: Repository<Usuario>,
    @InjectRepository(TipoUsuario) private readonly repoTipoUsuario: Repository<TipoUsuario>,
  ) {}
  async create(dto: CreateUsuarioDto) {
    const { nombre , idTipoUsuario } = dto;
     await this.isExistByName(nombre);
    const tipoUsuario= await this.findTipoUser(idTipoUsuario)

    const usuario = this.repo.create({ nombre: dto.nombre, contrasenia: dto.clave, tipoUsuario: tipoUsuario });
    await this.repo.save(usuario);
    return usuario;
  }

  async findAll() {
    return (await this.repo.find()).map((usuario) => {
      return {
        ...usuario,
        tipoUsuario: usuario.tipoUsuario.nombre,
      };
    });
  }

  async isExistByName(nombre: string) {
    const usuario = await this.repo.findOne({ where: { nombre } });
    if (usuario) {
      throw new ConflictException("Ya existe")
    }


  }

  async findOneByNombre(nombre: string) {
    const usuario = await this.repo.findOne({ where: { nombre
     } });
    if (!usuario) {
      throw new NotFoundException("No existe el usuario")
    }
    return usuario
  }


  async findTipoUser(id: number) : Promise<TipoUsuario>{
    const tipoUsuario= await this.repoTipoUsuario.findOne({ where: { id } });
    if (!tipoUsuario) {

      throw new NotFoundException("El tipo usuario no existe")
      
    }

    return tipoUsuario
  }

  async findOne(id: number) {
    const usuario = await this.repo.findOne({ where: { id } });

    if (!usuario) {
      throw new NotFoundException('No se encontro el usuario');
    }
    return usuario;
  }

 
  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    await this.findOne(id);
    await this.isExistByName(updateUsuarioDto.nombre)

    const updateUsuario = await this.repo.preload({
      id: id,
      ...updateUsuarioDto,
    });
    await this.repo.save(updateUsuario);

    return await this.findOne(id);
  }

  async remove(id: number) {
    const usuario = await this.findOne(id);

    return await this.repo.delete(usuario);
  }
}
