import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModuleAsyncOptions } from '@nestjs/jwt';

export default (): JwtModuleAsyncOptions => ({
  imports: [ConfigModule],
  useFactory: async (configModule: ConfigService) => ({
    global: true,
    secret: configModule.get('jwtSecret'),
    signOptions: { expiresIn: '86400s' },
  }),
  inject: [ConfigService],
});
