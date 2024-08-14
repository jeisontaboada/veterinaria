import { Module } from '@nestjs/common';
import { JeisonService } from './jeison.service';
import { JeisonController } from './jeison.controller';

@Module({
  controllers: [JeisonController],
  providers: [JeisonService],
})
export class JeisonModule {}
