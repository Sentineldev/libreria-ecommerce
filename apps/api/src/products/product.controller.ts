import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import ProductService from './product.service';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { Public } from '../accounts/is-public.decorator';
import {
  CreateBookProductDto,
  OutGoingBookProductDto,
  UpdateBookProductDto,
} from './dto/book-product.dto';

@Controller('stock-product')
@ApiTags('Manejo de Productos en inventario')
export default class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('')
  @ApiCreatedResponse({ type: OutGoingBookProductDto })
  @ApiUnprocessableEntityResponse()
  @Public()
  create(@Body() body: CreateBookProductDto) {
    return this.productService.create(body);
  }

  @Put(':id')
  @ApiCreatedResponse({ type: OutGoingBookProductDto })
  @ApiUnprocessableEntityResponse()
  @Public()
  update(@Param('id') id: string, @Body() body: UpdateBookProductDto) {
    return this.productService.update(id, body);
  }

  @Get('book-products')
  @ApiOkResponse({ type: OutGoingBookProductDto, isArray: true })
  @ApiUnprocessableEntityResponse()
  @Public()
  getBookProducts() {
    return this.productService.getBookProducts();
  }
  @Get(':id')
  @ApiOkResponse({ type: OutGoingBookProductDto })
  @ApiUnprocessableEntityResponse()
  @Public()
  getById(@Param('id') id: string) {
    return this.productService.getById(id);
  }
}
