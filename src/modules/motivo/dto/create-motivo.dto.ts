import { IsNotEmpty, IsString } from "class-validator";

export class CreateMotivoDto {

     @IsString({message:"Tiene que ser un texto"})
     @IsNotEmpty({message:"No puede estar vacío"})
     detalleMotivo:string
}
