import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import Customer from './classes/customer.class';
import CustomerRepository from './repository/customer.repository';

@Injectable()
export class CustomersService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async getById(id: string): Promise<Customer> {
    const customer = await this.customerRepository.getById(id);
    if (!customer) throw new NotFoundException('El cliente no existe');
    return customer;
  }

  async update(id: string, body: CreateCustomerDto): Promise<Customer> {
    const currentCustomer = await this.getById(id);
    const newCustomer = new Customer({
      ...currentCustomer,
      ...body,
    });
    return await this.customerRepository.save(newCustomer);
  }
}
