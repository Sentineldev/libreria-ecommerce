import BookProductMapper from 'src/products/mappers/book-product.mapper';
import OrderProduct from '../classes/order-product.class';
import OrderProductEntity from '../entities/order-product.entity';
import OrderMapper from './order.mapper';

export default class OrderProductMapper {
  public static ToEntity(product: OrderProduct): OrderProductEntity {
    return OrderProductEntity.New({
      ...product,
      orderId: product.order.id,
      productId: product.product.id,
    });
  }
  public static ToEntities(products: OrderProduct[]): OrderProductEntity[] {
    return products.map((product) => this.ToEntity(product));
  }

  public static FromEntity(productEntity: OrderProductEntity): OrderProduct {
    return new OrderProduct({
      ...productEntity,
      order: OrderMapper.FromEntity(productEntity.order),
      product: BookProductMapper.FromEntity(productEntity.product),
    });
  }
  public static FromEntities(
    productEntities: OrderProductEntity[],
  ): OrderProduct[] {
    return productEntities.map((productEntity) =>
      this.FromEntity(productEntity),
    );
  }
}
