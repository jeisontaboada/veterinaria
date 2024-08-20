import { Module } from '@nestjs/common';

import { UsuarioModule } from './modules/usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';

import { CitaModule } from './modules/cita/cita.module';
import { MascotaModule } from './modules/mascota/mascota.module';
import { MotivoModule } from './modules/motivo/motivo.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsuarioModule,
    AuthModule,
    CitaModule,
    MascotaModule,
    MotivoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
