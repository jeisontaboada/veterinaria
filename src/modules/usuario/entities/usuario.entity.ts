import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TipoUsuario } from './tipo-usuario.entity';
import { Mascota } from 'src/modules/mascota/entities/mascota.entity';

@Entity({ name: 'usuario' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
  nombre: String;

  @Column({ type: 'varchar', length: 50, nullable: false })
  contrasenia: String;

  @ManyToOne(
    () => TipoUsuario,
    (tpu) => tpu.usuarios,

    { eager: true },
  )
  tipoUsuario: TipoUsuario;


  @OneToMany(
    () => Mascota,
    (mascota) => mascota.usuario,

    { eager: true },
  )
  mascota: Mascota;
}
