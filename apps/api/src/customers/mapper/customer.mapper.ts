import Customer from '../classes/customer.class';
import { OutGoingCustomerDto } from '../dto/outgoing-customer.dto';

export default class CustomerMapper {
  public static ToOutgoingDto(customer: Customer): OutGoingCustomerDto {
    return { ...customer };
  }
}
