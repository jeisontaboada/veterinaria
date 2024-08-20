import { Usuario } from 'src/modules/usuario/entities/usuario.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cita')
export class Cita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
    nullable: false,
  })
  numCita: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.cita, {eager:true} )
  cliente: Usuario;
}
