import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CheckHashedValue } from 'src/utils/encryption';
import Account from './classes/account.class';
import { AuthenticationDto } from './dto/auth-account.dto';
import { AccountsService } from './accounts.service';
@Injectable()
export default class AuthService {
  constructor(private readonly accountService: AccountsService) {}

  async auth(body: AuthenticationDto): Promise<Account> {
    const account = await this.accountService.getByEmail(body.email);

    //Verificar si el password que se dio, coincide con el de la base de datos.
    const isPasswordValid = await CheckHashedValue(
      account.password,
      body.password,
    );
    if (!isPasswordValid) throw new UnauthorizedException('Wrong credentials');

    return account;
  }
}
