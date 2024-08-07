import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import AccountRepository from './repository/account.repository';
import AuthService from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import CustomerEntity from 'src/customers/entities/customer.entity';
import AccountEntity from './entities/account.entity';
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from '../config/jwt.config';
import { AuthGuard } from './auth.guard';
import { ConfigModule } from '@nestjs/config';
@Module({
  controllers: [AccountsController],
  providers: [
    AccountsService,
    AuthService,
    AccountRepository,
    { provide: 'APP_GUARD', useClass: AuthGuard },
  ],
  exports: [AccountsService],
  imports: [
    TypeOrmModule.forFeature([CustomerEntity, AccountEntity]),
    JwtModule.registerAsync(jwtConfig()),
    ConfigModule,
  ],
})
export class AccountsModule {}
