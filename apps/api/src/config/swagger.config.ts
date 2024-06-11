import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { SwaggerCustomOptions } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { ProductModule } from 'src/products/product.module';
import { AccountsModule } from 'src/accounts/accounts.module';
import { CustomersModule } from 'src/customers/customers.module';

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
  const swaggerDocument = SwaggerModule.createDocument(app, build, {
    include: [AccountsModule, CustomersModule],
  });
  SwaggerModule.setup(prefix, app, swaggerDocument, swaggerOptions);

  const build2: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
    .setTitle('Inventario Libreria')
    .setDescription('Interfaz de comunicacion Libreria')
    .setVersion('1.0')
    .build();
  // .addBearerAuth()
  const swaggerDocument2 = SwaggerModule.createDocument(app, build2, {
    include: [ProductModule],
  });
  SwaggerModule.setup('/store_api', app, swaggerDocument2, swaggerOptions);
};
