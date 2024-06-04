import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import AccountRepository from './repository/account.repository';
import AuthService from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import CustomerEntity from 'src/customers/entities/customer.entity';
import AccountEntity from './entities/account.entity';
@Module({
  controllers: [AccountsController],
  providers: [AccountsService, AuthService, AccountRepository],
  imports: [TypeOrmModule.forFeature([CustomerEntity, AccountEntity])],
})
export class AccountsModule {}
