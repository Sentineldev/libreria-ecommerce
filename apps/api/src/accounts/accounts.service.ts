import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import Account from './classes/account.class';
import AccountRepository from './repository/account.repository';
import Customer from 'src/customers/classes/customer.class';
import { GenerateUuid } from 'src/utils/uuid';
import { HashValue } from 'src/utils/encryption';
import { isDate } from 'class-validator';

@Injectable()
export class AccountsService {
  constructor(private readonly accountRepository: AccountRepository) {}
  async create(body: CreateAccountDto): Promise<Account> {
    //Debe verificar que el correo de la cuenta sea unico.

    const birthDate = new Date(body.customer.birthDate);
    if (!isDate(birthDate))
      throw new UnprocessableEntityException('Wrong birthdate format');
    const accountExists = await this.accountRepository.getByEmail(body.email);

    if (accountExists) throw new ConflictException('Non unique email address.');

    //Se debe encryptar el password, antes de ser guardado en la base de datos.
    const hashedPassword = await HashValue(body.password);
    const newCustomer = new Customer({
      ...body.customer,
      id: GenerateUuid(),
    });
    const newAccount = new Account({
      customer: newCustomer,
      id: GenerateUuid(),
      email: body.email,
      password: hashedPassword,
    });

    return await this.accountRepository.save(newAccount);
  }

  async getByEmail(email: string): Promise<Account> {
    const account = await this.accountRepository.getByEmail(email);

    if (!account) throw new NotFoundException('Email not found');

    return account;
  }
}
