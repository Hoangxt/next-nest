import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');

  // validation
  // whitelist: các thuộc tính không chuyền vào sẽ để yên
  // forbidNonWhitelisted: khi truyền vào các thuộc tính không tồn tại sẽ báo lỗi
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  app.setGlobalPrefix('api/v1', {
    exclude: [''],
  });
  await app.listen(port);
}
bootstrap();
