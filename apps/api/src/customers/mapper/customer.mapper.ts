import Customer from '../classes/customer.class';
import { OutGoingCustomerDto } from '../dto/outgoing-customer.dto';
import CustomerEntity from '../entities/customer.entity';

export default class CustomerMapper {
  public static ToEntity(customer: Customer): CustomerEntity {
    return CustomerEntity.New({ ...customer });
  }

  public static ToEntities(customers: Customer[]): CustomerEntity[] {
    return customers.map((customer) => this.ToEntity(customer));
  }

  public static FromEntitty(customerEntity: CustomerEntity): Customer {
    return new Customer(customerEntity);
  }

  public static FromEntities(customerEntities: CustomerEntity[]): Customer[] {
    return customerEntities.map((customerEntity) =>
      this.FromEntitty(customerEntity),
    );
  }

  public static ToOutgoingDto(customer: Customer): OutGoingCustomerDto {
    return { ...customer };
  }
}
