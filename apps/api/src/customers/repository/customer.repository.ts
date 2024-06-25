import { Injectable } from '@nestjs/common';
import Customer from '../classes/customer.class';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import CustomerEntity from '../entities/customer.entity';
import CustomerMapper from '../mapper/customer.mapper';
@Injectable()
export default class CustomerRepository {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly repository: Repository<CustomerEntity>,
  ) {}

  async save(customer: Customer): Promise<Customer> {
    const entity = CustomerMapper.ToEntity(customer);
    await this.repository.save(entity);

    return customer;
  }

  async getById(id: string): Promise<Customer | undefined> {
    const result = await this.repository.findOneBy({ id });

    if (!result) return undefined;

    const customer = CustomerMapper.FromEntitty(result);

    return customer;
  }
}
