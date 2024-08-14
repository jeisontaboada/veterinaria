import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const port = process.env.PORT || 3000
  const logger = new Logger('veterinaria')

  const app = await NestFactory.create(AppModule);
  app.enableCors() //para poder utilizar la api en el front
  app.useGlobalPipes(new ValidationPipe())
  app.setGlobalPrefix("api")
  await app.listen(port);
  logger.log(`Servidor corriendo en el puerto ${port}`)
}
bootstrap();
