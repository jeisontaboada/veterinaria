import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { constantss } from 'src/modules/config/constanst';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: constantss.jwtSecret,
      });
      request['oveja'] = payload;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }

  private extractTokenFromHeader(request: Request): string {
    const [type, token] =
      (request.headers as any).authorization?.split(' ') ?? [];

    if (type === 'Bearer') {
      return token;
    } else {
      throw new UnauthorizedException('Sin autorización');
    }
  }
}
