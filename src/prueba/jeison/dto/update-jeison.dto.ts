import { PartialType } from '@nestjs/mapped-types';
import { CreateJeisonDto } from './create-jeison.dto';

export class UpdateJeisonDto extends PartialType(CreateJeisonDto) {
  id: number;
}
