import { BadRequestException, Injectable } from '@nestjs/common';
import OrderRepository from './repository/order.repository';
import Order from './classes/order.class';
import OrderProduct from './classes/order-product.class';
import { CreateOrderCommentDto, CreateOrderDto } from './dto/order.dto';
import { GenerateUuid } from 'src/utils/uuid';
import DateUtils from 'src/utils/date';
import BookProductRepository from 'src/products/repositories/book-product.entity';
import { AccountsService } from 'src/accounts/accounts.service';
import OrderComment from './classes/order-comment.class';
import OrderCommentRepository from './repository/order-comment.repository';

@Injectable()
export class OrdersService {
  constructor(
    private readonly repository: OrderRepository,
    private readonly commentRepository: OrderCommentRepository,
    private readonly productRepository: BookProductRepository,
    private readonly accountService: AccountsService,
  ) {}

  async createOrder(body: CreateOrderDto) {
    const account = await this.accountService.getByEmail(body.accountEmail);
    const newOrder = new Order({
      id: GenerateUuid(),
      account: account,
      date: DateUtils.Today(),
      status: 'PENDING',
      ...body,
    });
    const productIds = body.products.map((val) => val.productId);
    const dbProducts = await this.productRepository.getByIds(productIds);
    if (!(productIds.length === dbProducts.length)) {
      throw new BadRequestException('Product not found');
    }
    const newOrderProducts = dbProducts.map((product) => {
      const orderProductIndex = body.products.findIndex(
        (val) => val.productId === product.id,
      );
      const orderProduct = body.products[orderProductIndex];
      return new OrderProduct({
        order: newOrder,
        product: product,
        quantity: orderProduct.quantity,
        totalBolivares: orderProduct.totalBolivares,
        totalDollars: orderProduct.totalDollars,
      });
    });

    await this.repository.save(newOrder, newOrderProducts);
  }

  async addComment(body: CreateOrderCommentDto, orderId: string) {
    const order = await this.getById(orderId);
    const newComment = new OrderComment({
      body: body.body,
      createdAt: DateUtils.TimeStamp(),
      fromCustomer: false,
      id: GenerateUuid(),
      order,
    });

    await this.commentRepository.save(newComment);
  }

  async addCommentCustomer(body: CreateOrderCommentDto, orderId: string) {
    const order = await this.getById(orderId);
    const newComment = new OrderComment({
      body: body.body,
      createdAt: DateUtils.TimeStamp(),
      fromCustomer: true,
      id: GenerateUuid(),
      order,
    });
    await this.commentRepository.save(newComment);
  }

  async update(orderId: string, status: string) {
    const order = await this.getById(orderId);

    order.status = status;

    await this.repository.update(order);
  }

  async getAll(): Promise<Order[]> {
    return await this.repository.getAll();
  }

  async getById(id: string): Promise<Order> {
    return await this.repository.getById(id);
  }

  async getByAccount(accountId: string): Promise<Order[]> {
    return await this.repository.getByAccount(accountId);
  }

  async getProducts(orderId: string): Promise<OrderProduct[]> {
    await this.getById(orderId);

    return await this.repository.getProducts(orderId);
  }

  async delete(orderId: string) {
    await this.repository.delete(orderId);
  }

  async getComments(orderId: string): Promise<OrderComment[]> {
    return await this.commentRepository.getAll(orderId);
  }
}
