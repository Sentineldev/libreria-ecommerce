import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import AccountRepository from './repository/account.repository';

@Module({
  controllers: [AccountsController],
  providers: [AccountsService, AccountRepository],
})
export class AccountsModule {}
