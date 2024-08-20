import { Mascota } from 'src/modules/mascota/entities/mascota.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('motivo')
export class Motivo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  detalleMotivo: string;

  @OneToMany(() => Mascota, (mascota) => mascota.motivo)
  mascota: Mascota[];

  
}
