import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './config/database.config';
import { InventoryModule } from './inventory/inventory.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client/dist'),
    }),
    TypeOrmModule.forRootAsync(databaseConfig()),
    InventoryModule,
    StoreModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
