import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import { OutGoingAccountDto } from 'src/accounts/dto/outgoing-account.dto';
import { OutGoingBookProductDto } from 'src/products/dto/book-product.dto';

export class CreateOrderProductDto {
  @ApiProperty({ type: String })
  public productId: string;
  @ApiProperty({ type: Number })
  public quantity: number;
  @ApiProperty({ type: Number })
  public totalBolivares: number;
  @ApiProperty({ type: Number })
  public totalDollars: number;
}
export class CreateOrderDto {
  @ApiProperty({ type: String })
  public accountEmail: string;

  @ApiProperty({ type: Number })
  public totalBolivares: number;

  @ApiProperty({ type: Number })
  public totalDollars: number;

  @ApiProperty({ type: CreateOrderProductDto, isArray: true })
  @IsArray()
  public products: CreateOrderProductDto[];
}

export class OutGoingOrderDto {
  @ApiProperty({ type: String })
  public id: string;

  @ApiProperty({ type: String })
  public date: string;

  @ApiProperty({ type: String })
  public status: string;

  @ApiProperty({ type: Number })
  public totalDollars: number;

  @ApiProperty({ type: Number })
  public totalBolivares: number;

  @ApiProperty({ type: OutGoingAccountDto })
  public account: OutGoingAccountDto;
}

export class OutGoingOrderProductDto {
  @ApiProperty({ type: OutGoingOrderDto })
  public order: OutGoingOrderDto;

  @ApiProperty({ type: OutGoingBookProductDto })
  public product: OutGoingBookProductDto;

  @ApiProperty({ type: Number })
  public quantity: number;

  @ApiProperty({ type: Number })
  public totalDollars: number;

  @ApiProperty({ type: Number })
  public totalBolivares: number;
}

export class CreateOrderCommentDto {
  public body: string;
}
export class OutGoingOrderCommentDto {
  @ApiProperty({ type: String })
  public id: string;
  @ApiProperty({ type: OutGoingOrderDto })
  public order: OutGoingOrderDto;
  @ApiProperty({ type: String })
  public body: string;
  @ApiProperty({ type: String })
  public createdAt: string;
  @ApiProperty({ type: Boolean })
  public fromCustomer: boolean;
}
