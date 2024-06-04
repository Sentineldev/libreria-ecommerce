import CustomerMapper from 'src/customers/mapper/customer.mapper';
import Account from '../classes/account.class';
import { OutGoingAccountDto } from '../dto/outgoing-account.dto';
import AccountEntity from '../entities/account.entity';

export default class AccountMapper {
  public static ToEntity(account: Account): AccountEntity {
    return AccountEntity.New({ ...account, customerId: account.customer.id });
  }

  public static ToEntities(accounts: Account[]): AccountEntity[] {
    return accounts.map((account) => this.ToEntity(account));
  }

  public static FromEntitty(accountEntity: AccountEntity): Account {
    return new Account(accountEntity);
  }

  public static FromEntities(accountEntities: AccountEntity[]): Account[] {
    return accountEntities.map((accountEntity) =>
      this.FromEntitty(accountEntity),
    );
  }

  public static ToOutGoingDto(account: Account): OutGoingAccountDto {
    return {
      id: account.id,
      email: account.email,
      customer: CustomerMapper.ToOutgoingDto(account.customer),
    };
  }
}
