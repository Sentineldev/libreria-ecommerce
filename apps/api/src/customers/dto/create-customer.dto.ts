import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty } from 'class-validator';
export class CreateCustomerDto {
  @ApiProperty({ type: String })
  @IsDefined()
  @IsNotEmpty()
  public firstName: string;
  @ApiProperty({ type: String })
  @IsDefined()
  @IsNotEmpty()
  public lastName: string;
  @ApiProperty({ type: String, example: '2001-10-23' })
  @IsDefined()
  @IsNotEmpty()
  public birthDate: string;
  @ApiProperty({ type: String })
  @IsDefined()
  @IsNotEmpty()
  public gender: string;
  @ApiProperty({ type: String })
  @IsDefined()
  @IsNotEmpty()
  public country: string;
  @ApiProperty({ type: String })
  @IsDefined()
  @IsNotEmpty()
  public city: string;
  @ApiProperty({ type: String })
  @IsDefined()
  @IsNotEmpty()
  public state: string;
  @ApiProperty({ type: String })
  @IsDefined()
  @IsNotEmpty()
  public address: string;
  @ApiProperty({ type: String })
  @IsDefined()
  @IsNotEmpty()
  public postalCode: string;
}
