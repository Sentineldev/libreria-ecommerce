import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { SwaggerCustomOptions } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const swaggerOptions: SwaggerCustomOptions = {
  customSiteTitle: 'Libreria API',
  customCss: '.swagger-ui .topbar { display: none }',
  explorer: true,
  // customfavIcon: '../static/favicon.png',
};

export default (app: INestApplication, prefix: string) => {
  const build: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
    .setTitle('Libreria')
    .setDescription('Interfaz de comunicacion Libreria')
    .setVersion('1.0')
    .build();
  // .addBearerAuth()
  const swaggerDocument = SwaggerModule.createDocument(app, build);
  SwaggerModule.setup(prefix, app, swaggerDocument, swaggerOptions);
};
