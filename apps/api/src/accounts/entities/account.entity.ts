import CustomerEntity from 'src/customers/entities/customer.entity';
import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';
export type AccountEntityParams = {
  id: string;
  email: string;
  password: string;
  customerId: string;
};

@Entity({ name: 'account' })
export default class AccountEntity {
  @PrimaryColumn('text', { name: 'id' })
  public id: string;

  @Column('varchar', {
    name: 'email',
    length: 128,
    unique: true,
    nullable: false,
  })
  public email: string;

  @Column('varchar', {
    name: 'password',
    length: 128,
    unique: true,
    nullable: false,
  })
  public password: string;

  @Column('text', { name: 'customer_id', nullable: false })
  public customerId: string;

  @OneToOne(() => CustomerEntity)
  @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
  public customer: CustomerEntity;

  public static New(params: AccountEntityParams): AccountEntity {
    const entity = new AccountEntity();

    entity.id = params.id;
    entity.email = params.email;
    entity.password = params.password;
    entity.customerId = params.customerId;

    return entity;
  }
}
