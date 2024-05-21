import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import Account from './classes/account.class';
import AccountRepository from './repository/account.repository';
import Customer from 'src/customers/classes/customer.class';
import { GenerateUuid } from 'src/utils/uuid';
import { CheckHashedValue, HashValue } from 'src/utils/encryption';
import { AuthenticationDto } from './dto/auth-account.dto';

@Injectable()
export class AccountsService {
  constructor(private readonly accountRepository: AccountRepository) {}
  async create(body: CreateAccountDto): Promise<Account> {
    //Debe verificar que el correo de la cuenta sea unico.
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

  async auth(body: AuthenticationDto): Promise<Account> {
    const account = await this.getByEmail(body.email);

    //Verificar si el password que se dio, coincide con el de la base de datos.
    const isPasswordValid = await CheckHashedValue(
      account.password,
      body.password,
    );
    if (!isPasswordValid) throw new UnauthorizedException('Wrong credentials');

    return account;
  }
}
