import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('tipo-usuario')
export class TipoUsuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
    unique: true,
  })
  nombre: string;

  @OneToMany(() => Usuario, (usr) => usr.tipoUsuario)
  usuarios: Usuario[];
}
