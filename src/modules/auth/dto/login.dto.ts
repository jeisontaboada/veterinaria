import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString({ message: 'Tiene que ser un texto' })
  @IsNotEmpty({ message: 'No debe estar vacio' })
  usuario: string;

  @IsString({ message: 'Tiene que ser un texto' })
  @IsNotEmpty({ message: 'No debe estar vacio' })
  contrasenia: string;
}
