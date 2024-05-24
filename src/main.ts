import { NestFactory } from '@nestjs/core';
import { UsersModule } from './modules/users.module';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  app.enableCors();
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '500mb' }));
  await app.listen(3000);
}
bootstrap();
 