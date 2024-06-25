import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsArray, IsBoolean, IsDefined, IsNumber } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({ type: String, example: 'string' })
  @IsDefined()
  public title: string;

  @ApiProperty({ type: String, example: 'string' })
  @IsDefined()
  public synopsis: string;

 
  @ApiProperty({ type: String, example: 'string' })
  @IsDefined()
  public imageUrl: string;

  @ApiProperty({ type: Boolean, example: true })
  @IsDefined()
  @Transform((val) => JSON.parse(String(val.value)))
  @IsBoolean()
  public physicalVersion: boolean;

  @ApiProperty({ type: Boolean, example: false })
  @IsDefined()
  @Transform((val) => JSON.parse(String(val.value)))
  @IsBoolean()
  public digitalVersion: boolean;

  @ApiProperty({ type: String, example: '2001-10-23' })
  @IsDefined()
  public releaseDate: string;

  @ApiProperty({ type: Number, example: 230 })
  @IsDefined()
  @Transform((val) => Number(val.value))
  @IsNumber()
  public pageCount: number;

  @ApiProperty({ type: String, isArray: true, example: ['Ingles'] })
  @IsDefined()
  @IsArray()
  public language: string[];

  @ApiProperty({ type: String, isArray: true, example: ['Comedia',"Romantico"] })
  @IsDefined()
  @IsArray()
  public genre: string[];

  @ApiProperty({ type: String, isArray: true, example: ['Autor 1'] })
  @IsDefined()
  @IsArray()
  public author: string[];
}

export class OutGoingBookDto {
  @ApiProperty({ type: String, example: 'string' })
  public id: string;
  @ApiProperty({ type: String, example: 'string' })
  public title: string;

  @ApiProperty({ type: String, example: 'string' })
  public synopsis: string;

  @ApiProperty({ type: String, example: 'string' })
  public genre: string;

  @ApiProperty({ type: String, example: 'string' })
  public imageUrl: string;

  @ApiProperty({ type: Boolean, example: true })
  public physicalVersion: boolean;

  @ApiProperty({ type: Boolean, example: false })
  public digitalVersion: boolean;

  @ApiProperty({ type: String, example: '2001-10-23' })
  public releaseDate: string;

  @ApiProperty({ type: Number, example: 230 })
  public pageCount: number;

  @ApiProperty({ type: String, isArray: true, example: ['Ingles'] })
  public language: string[];

  @ApiProperty({ type: String, isArray: true, example: ['Autor 1'] })
  public author: string[];
}
