import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { constants } from 'buffer';
import { constantss } from '../config/constanst';
import { UsuarioModule } from '../usuario/usuario.module';

@Module({
  imports: [
    UsuarioModule,
    JwtModule.register({
      global: true,
      secret: constantss.jwtSecret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],

  providers: [AuthService],
})
export class AuthModule {}
