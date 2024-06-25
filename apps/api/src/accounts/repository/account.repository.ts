import { Injectable } from '@nestjs/common';
import Account from '../classes/account.class';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import AccountEntity from '../entities/account.entity';
import AccountMapper from '../mapper/account.mapper';
import CustomerMapper from 'src/customers/mapper/customer.mapper';
//Repositorio donde se manejan todas las operaciones con la base de datos.
@Injectable()
export default class AccountRepository {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly repository: Repository<AccountEntity>,
  ) {}

  async save(account: Account): Promise<Account> {
    const accountEntity = AccountMapper.ToEntity(account);
    const customerEntity = CustomerMapper.ToEntity(account.customer);
    await this.repository.manager.transaction(async (entityManager) => {
      await entityManager.save(customerEntity);
      await entityManager.save(accountEntity);
    });
    return account;
  }
  async getByEmail(email: string): Promise<Account | undefined> {
    const result = await this.repository.findOne({
      relations: ['customer'],
      where: { email },
    });
    if (!result) return undefined;

    return AccountMapper.FromEntitty(result);
  }
}
