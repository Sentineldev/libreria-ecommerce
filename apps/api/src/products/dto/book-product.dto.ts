import { ApiProperty } from '@nestjs/swagger';
import { CreateBookDto, OutGoingBookDto } from './book.dto';
import { IsBoolean, IsDefined, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateBookProductDto extends CreateBookDto {
  @ApiProperty({ type: Number, example: 150 })
  @IsDefined()
  @Transform((val) => Number(val.value))
  @IsNumber()
  public bolivaresPrice: number;

  @ApiProperty({ type: Number, example: 30 })
  @IsDefined()
  @Transform((val) => Number(val.value))
  @IsNumber()
  public dollarsPrice: number;

  @ApiProperty({ type: Number, example: 10 })
  @IsDefined()
  @Transform((val) => Number(val.value))
  @IsNumber()
  public stock: number;
}

export class UpdateBookProductDto extends CreateBookProductDto {
  @ApiProperty({ type: Boolean, example: true })
  @IsDefined()
  @Transform((val) => JSON.parse(String(val.value)))
  @IsBoolean()
  public isPublic: boolean;
}

export class OutGoingBookProductDto {
  @ApiProperty({ type: String, example: 'string' })
  public id: string;

  @ApiProperty({ type: OutGoingBookDto })
  public book: OutGoingBookDto;

  @ApiProperty({ type: Number, example: 150 })
  public bolivaresPrice: number;

  @ApiProperty({ type: Number, example: 30 })
  public dollarsPrice: number;

  @ApiProperty({ type: Boolean, example: true })
  public hasStock: boolean;

  @ApiProperty({ type: Boolean, example: true })
  public isPublic: boolean;

  @ApiProperty({ type: Number, example: 10 })
  public stock: number;
}
