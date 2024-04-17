export type DatabaseConfig = {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
};
export type AppConfig = {
  port: number;
  prefix: string;
  database: DatabaseConfig;
};
