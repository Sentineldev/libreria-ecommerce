import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CheckHashedValue } from 'src/utils/encryption';
import { AuthenticationDto } from './dto/auth-account.dto';
import { AccountsService } from './accounts.service';
import { JwtPayloadDto } from './dto/jwt-payload.dto';
import { JwtService } from '@nestjs/jwt';
import AccountMapper from './mapper/account.mapper';
@Injectable()
export default class AuthService {
  constructor(
    private readonly accountService: AccountsService,
    private readonly jwtService: JwtService,
  ) {}

  async auth(body: AuthenticationDto): Promise<string> {
    const account = await this.accountService.getByEmail(body.email);

    //Verificar si el password que se dio, coincide con el de la base de datos.
    const isPasswordValid = await CheckHashedValue(
      account.password,
      body.password,
    );
    if (!isPasswordValid) throw new UnauthorizedException('Wrong credentials');

    const mappedAccount = AccountMapper.ToOutGoingDto(account);
    const payload: JwtPayloadDto = { ...mappedAccount };
    return await this.jwtService.signAsync(payload);
  }
}
