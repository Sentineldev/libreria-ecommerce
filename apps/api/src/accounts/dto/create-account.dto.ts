import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsNotEmpty } from 'class-validator';
import { CreateCustomerDto } from 'src/customers/dto/create-customer.dto';

export class CreateAccountDto {
  @ApiProperty({ type: String, example: 'string@gmail.com' })
  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @ApiProperty({ type: String })
  @IsDefined()
  @IsNotEmpty()
  public password: string;

  @ApiProperty({ type: CreateCustomerDto })
  public customer: CreateCustomerDto;
}
