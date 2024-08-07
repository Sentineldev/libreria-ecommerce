import OrderComment from '../classes/order-comment.class';
import { OutGoingOrderCommentDto } from '../dto/order.dto';
import OrderCommentEntity from '../entities/order-comment.entity';
import OrderMapper from './order.mapper';

export default class OrderCommentMapper {
  public static ToEntity(comment: OrderComment): OrderCommentEntity {
    return OrderCommentEntity.New({
      ...comment,
      orderId: comment.order.id,
    });
  }

  public static FromEntity(commentEntity: OrderCommentEntity): OrderComment {
    return new OrderComment({
      ...commentEntity,
      order: OrderMapper.FromEntity(commentEntity.order),
    });
  }
  public static FromEntities(
    commentEntities: OrderCommentEntity[],
  ): OrderComment[] {
    return commentEntities.map((commentEntity) =>
      this.FromEntity(commentEntity),
    );
  }

  public static ToOutGoingDto(comment: OrderComment): OutGoingOrderCommentDto {
    return {
      ...comment,
      order: OrderMapper.ToOutGoingDto(comment.order),
      createdAt: comment.createdAt.toString(),
    };
  }
  public static ToOutGoingDtos(
    comments: OrderComment[],
  ): OutGoingOrderCommentDto[] {
    return comments.map((comment) => this.ToOutGoingDto(comment));
  }
}
