import { AppConfig } from './config.type';

export default (): AppConfig => ({
  port: Number.parseInt(process.env.PORT, 10) || 3000,
  prefix: process.env.PREFIX || 'api',
  jwtSecret: process.env.JWT_SECRET || '',
  database: {
    database: process.env.DATABASE || 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    password: process.env.DATABASE_PASSWORD || 'foo',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    user: process.env.DATABASE_USER || 'bar',
  },
});
