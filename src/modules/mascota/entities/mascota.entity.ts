import { Motivo } from 'src/modules/motivo/entities/motivo.entity';
import { Usuario } from 'src/modules/usuario/entities/usuario.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mascota')
export class Mascota {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  nombre: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  raza: String;

  @Column({
    type: 'int',
    nullable: false,
  })
  edad: number;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  especie: string;

  @ManyToOne(() => Motivo, (motivo) => motivo.detalleMotivo, {eager:true})
  motivo: Motivo;


  @ManyToOne(() => Usuario, (usuario) => usuario.mascota)
  usuario: Usuario[];
}
