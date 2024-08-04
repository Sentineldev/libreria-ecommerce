import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export default (): TypeOrmModuleAsyncOptions => ({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    port: configService.get('database.port'),
    host: configService.get('database.host'),
    username: configService.get('database.user'),
    password: configService.get('database.password'),
    database: configService.get('database.database'),
    synchronize: false,
    autoLoadEntities: true,
  }),
  inject: [ConfigService],
});
