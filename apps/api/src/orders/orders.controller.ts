import {
  Controller,
  Get,
  Param,
  Delete,
  Post,
  Body,
  Patch,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  CreateOrderCommentDto,
  CreateOrderDto,
  OutGoingOrderCommentDto,
  OutGoingOrderDto,
  OutGoingOrderProductDto,
} from './dto/order.dto';
import { Public } from 'src/accounts/is-public.decorator';
import OrderMapper from './mapper/order.mapper';
import OrderCommentMapper from './mapper/order-comment.mapper';

@Controller('orders')
@ApiTags('Manejo de ordenes')
@Public()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiCreatedResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  create(@Body() body: CreateOrderDto) {
    return this.ordersService.createOrder(body);
  }

  @Post('comment/:orderId')
  @ApiCreatedResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  addComment(
    @Body() body: CreateOrderCommentDto,
    @Param('orderId') orderId: string,
  ) {
    return this.ordersService.addComment(body, orderId);
  }

  @Post('comment-customer/:orderId')
  @ApiCreatedResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  addCommentFromCustomer(
    @Body() body: CreateOrderCommentDto,
    @Param('orderId') orderId: string,
  ) {
    return this.ordersService.addCommentCustomer(body, orderId);
  }

  @Patch(':orderId/:status')
  @ApiOkResponse()
  update(@Param('orderId') id: string, @Param('status') status: string) {
    return this.ordersService.update(id, status);
  }

  @Get()
  @ApiOkResponse({ type: OutGoingOrderDto, isArray: true })
  async getAll() {
    const result = await this.ordersService.getAll();
    return OrderMapper.ToOutGoingDtos(result);
  }

  @Get('comments/:orderId')
  @ApiOkResponse({ type: OutGoingOrderCommentDto, isArray: true })
  @ApiNotFoundResponse()
  async comments(@Param('orderID') id: string) {
    const result = await this.ordersService.getComments(id);
    return OrderCommentMapper.ToOutGoingDtos(result);
  }

  @Get('by-account/:accountId')
  @ApiOkResponse({ type: OutGoingOrderDto, isArray: true })
  @ApiNotFoundResponse()
  async getByAccount(@Param('accountId') id: string) {
    const result = await this.ordersService.getByAccount(id);
    return OrderMapper.ToOutGoingDtos(result);
  }

  @Get(':id')
  @ApiOkResponse({ type: OutGoingOrderDto })
  @ApiNotFoundResponse()
  async getById(@Param('id') id: string) {
    const result = await this.ordersService.getById(id);
    return OrderMapper.ToOutGoingDto(result);
  }

  @Get(':id/products')
  @ApiOkResponse({ type: OutGoingOrderProductDto, isArray: true })
  @ApiNotFoundResponse()
  getProducts(@Param('id') id: string) {
    return this.ordersService.getProducts(id);
  }

  @Delete(':id')
  @ApiOkResponse()
  remove(@Param('id') id: string) {
    return this.ordersService.delete(id);
  }
}
