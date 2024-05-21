import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import CustomerRepository from './repository/customer.repository';

@Module({
  providers: [CustomersService, CustomerRepository],
  exports: [CustomerRepository, CustomersService],
})
export class CustomersModule {}
