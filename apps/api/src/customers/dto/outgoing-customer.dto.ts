import { ApiProperty } from '@nestjs/swagger';

export class OutGoingCustomerDto {
  @ApiProperty({ type: String })
  public id: string;
  @ApiProperty({ type: String })
  public firstName: string;
  @ApiProperty({ type: String })
  public lastName: string;
  @ApiProperty({ type: String })
  public birthDate: string;
  @ApiProperty({ type: String })
  public gender: string;
  @ApiProperty({ type: String })
  public country: string;
  @ApiProperty({ type: String })
  public city: string;
  @ApiProperty({ type: String })
  public state: string;
  @ApiProperty({ type: String })
  public address: string;
  @ApiProperty({ type: String })
  public postalCode: string;
}
