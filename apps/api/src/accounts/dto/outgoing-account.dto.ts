import { ApiProperty } from '@nestjs/swagger';
import { OutGoingCustomerDto } from 'src/customers/dto/outgoing-customer.dto';

export class OutGoingAccountDto {
  @ApiProperty({ type: String })
  public id: string;
  @ApiProperty({ type: String })
  public email: string;

  @ApiProperty({ type: OutGoingCustomerDto })
  public customer: OutGoingCustomerDto;
}
