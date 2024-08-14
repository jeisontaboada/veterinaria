import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUsuarioDto {
  @IsString({ message: 'El usuario debe ser un texto' })
  @IsNotEmpty({ message: 'El usuario no puede ser nulo' })
  nombre: string;

  @IsString({ message: 'La contraseña debe ser un texto' })
  @IsNotEmpty({ message: 'La contraseña no puede ser nulo' })
  clave: string;

  @IsNumber({},{message:"Tiene que ser un numero"})
  @IsNotEmpty({message:"El tipo usuario no puede estar vacio"})
  idTipoUsuario: number;
}
