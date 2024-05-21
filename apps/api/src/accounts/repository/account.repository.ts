import { Injectable } from '@nestjs/common';
import Account from '../classes/account.class';

@Injectable()
export default class AccountRepository {
  private accounts: Account[];
  constructor() {
    this.accounts = [];
  }

  async save(account: Account): Promise<Account> {
    const accountExists = this.accounts.find(
      (value) => value.email === account.email,
    );
    if (accountExists) {
      throw new Error('Non unique email address');
    }
    this.accounts = [...this.accounts, account];

    return account;
  }

  async getByEmail(email: string): Promise<Account | undefined> {
    const account = this.accounts.find((value) => value.email === email);

    if (!account) return undefined;

    return account;
  }
}
