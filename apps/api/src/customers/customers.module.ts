import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import CustomerRepository from './repository/customer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import CustomerEntity from './entities/customer.entity';

@Module({
  providers: [CustomersService, CustomerRepository],
  exports: [CustomerRepository, CustomersService],
  imports: [TypeOrmModule.forFeature([CustomerEntity])],
})
export class CustomersModule {}
