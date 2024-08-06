import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsNumber } from 'class-validator';

export default class PageQuery {
  @ApiProperty({ type: Number })
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @Transform((p) => Number(p.value))
  public page: number;

  @ApiProperty({ type: Number })
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @Transform((p) => Number(p.value))
  public pageSize: number;

  constructor(page: number, pageSize: number) {
    this.page = page;
    this.pageSize = pageSize;
  }
}
