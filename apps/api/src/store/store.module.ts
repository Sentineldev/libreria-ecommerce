import { Module } from '@nestjs/common';
import { AccountsModule } from 'src/accounts/accounts.module';
import { CustomersModule } from 'src/customers/customers.module';

@Module({
  imports: [CustomersModule, AccountsModule],
})
export class StoreModule {}
