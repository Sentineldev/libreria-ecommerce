import { Controller, Post, Body } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import AccountMapper from './mapper/account.mapper';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { OutGoingAccountDto } from './dto/outgoing-account.dto';
import { AuthenticationDto } from './dto/auth-account.dto';

@Controller('accounts')
@ApiTags('Cuentas de Usuario')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post('create')
  @ApiCreatedResponse({ type: OutGoingAccountDto })
  @ApiConflictResponse()
  @ApiUnprocessableEntityResponse()
  async create(@Body() createAccountDto: CreateAccountDto) {
    //ES IMPORTANTE SIEMPRE MAPEAR LA CUENTA Y NO EXPONER EL PASSWORD.
    const account = await this.accountsService.create(createAccountDto);
    return AccountMapper.ToOutGoingDto(account);
  }

  @Post('auth')
  @ApiOkResponse({ type: OutGoingAccountDto })
  @ApiNotFoundResponse()
  @ApiUnprocessableEntityResponse()
  async auth(@Body() body: AuthenticationDto) {
    //ES IMPORTANTE SIEMPRE MAPEAR LA CUENTA Y NO EXPONER EL PASSWORD.
    const account = await this.accountsService.auth(body);
    return AccountMapper.ToOutGoingDto(account);
  }
}
