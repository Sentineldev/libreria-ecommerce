import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import swaggerConfig from './config/swagger.config';
import { HttpStatus, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      transform: true,
    }),
  );
  const configService = app.get(ConfigService);
  app.setGlobalPrefix(configService.get('PREFIX'));
  swaggerConfig(app, configService.get('PREFIX'));
  await app.listen(configService.get('PORT'), '0.0.0.0');
}
bootstrap();
