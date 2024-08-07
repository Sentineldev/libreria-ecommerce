import AccountEntity from 'src/accounts/entities/account.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

export type OrderEntityParams = {
  id: string;
  date: string;
  status: string;
  accountId: string;
  totalBolivares: number;
  totalDollars: number;
};
@Entity({ name: 'purchase_order' })
export class OrderEntity {
  @PrimaryColumn('text', { name: 'id' })
  public id: string;

  @Column('date', { name: 'date' })
  public date: string;

  @Column('text', { name: 'status' })
  public status: string;

  @Column('text', { name: 'account_id' })
  public accountId: string;

  @Column('float', { name: 'total_bolivares' })
  public totalBolivares: number;

  @Column('float', { name: 'total_dollars' })
  public totalDollars: number;

  @ManyToOne(() => AccountEntity)
  @JoinColumn({ name: 'account_id', referencedColumnName: 'id' })
  public account: AccountEntity;

  public static New(params: OrderEntityParams) {
    const entity = new OrderEntity();

    entity.id = params.id;
    entity.date = params.date;
    entity.status = params.status;
    entity.accountId = params.accountId;
    entity.totalBolivares = params.totalBolivares;
    entity.totalDollars = params.totalDollars;

    return entity;
  }
}
