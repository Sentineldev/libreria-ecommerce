import { Injectable } from '@nestjs/common';
import Customer from '../classes/customer.class';

@Injectable()
export default class CustomerRepository {
  private customers: Customer[];
  constructor() {
    this.customers = [];
  }

  async save(customer: Customer): Promise<Customer> {
    //Verifica si el usuario existe para eliminarlo de la lista y volverlo a ingresar.
    const customerIdx = this.customers.findIndex(
      (value) => value.id === customer.id,
    );

    if (customerIdx !== -1) {
      this.customers = this.customers.slice(customerIdx, 1);
    }
    this.customers = [...this.customers, customer];
    return customer;
  }

  async getById(id: string): Promise<Customer | undefined> {
    const customer = this.customers.find((value) => value.id === id);

    if (!customer) return undefined;

    return customer;
  }
}
