import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsNotEmpty } from 'class-validator';

export class AuthenticationDto {
  @ApiProperty({ type: String, example: 'string@gmail.com' })
  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @ApiProperty({ type: String })
  @IsDefined()
  @IsNotEmpty()
  public password: string;
}
