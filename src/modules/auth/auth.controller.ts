import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { request } from 'http';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}



  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
   
}
