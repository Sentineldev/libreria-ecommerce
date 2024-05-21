import CustomerMapper from 'src/customers/mapper/customer.mapper';
import Account from '../classes/account.class';
import { OutGoingAccountDto } from '../dto/outgoing-account.dto';

export default class AccountMapper {
  public static ToOutGoingDto(account: Account): OutGoingAccountDto {
    return {
      id: account.id,
      email: account.email,
      customer: CustomerMapper.ToOutgoingDto(account.customer),
    };
  }
}
