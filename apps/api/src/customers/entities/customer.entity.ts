import { Entity, PrimaryColumn, Column } from 'typeorm';

export type CustomerEntityParams = {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  country: string;
  city: string;
  state: string;
  address: string;
  postalCode: string;
};

@Entity({ name: 'customer' })
export default class CustomerEntity {
  @PrimaryColumn('text', { name: 'id' })
  public id: string;

  @Column('varchar', { name: 'first_name', length: 64, nullable: false })
  public firstName: string;

  @Column('varchar', { name: 'last_name', length: 64, nullable: false })
  public lastName: string;

  @Column('date', { name: 'birth_date' })
  public birthDate: string;

  @Column('varchar', { name: 'gender', length: 64, default: '' })
  public gender: string;

  @Column('varchar', { name: 'country', length: 64, default: '' })
  public country: string;

  @Column('varchar', { name: 'city', length: 64, default: '' })
  public city: string;

  @Column('varchar', { name: 'state', length: 64, default: '' })
  public state: string;

  @Column('varchar', { name: 'address', length: 256, default: '' })
  public address: string;

  @Column('varchar', { name: 'postal_code', length: 64, default: '' })
  public postalCode: string;

  public static New(params: CustomerEntityParams): CustomerEntity {
    const entity = new CustomerEntity();

    entity.id = params.id;
    entity.firstName = params.firstName;
    entity.lastName = params.lastName;
    entity.birthDate = params.birthDate;
    entity.gender = params.gender;
    entity.country = params.country;
    entity.city = params.city;
    entity.state = params.state;
    entity.address = params.address;
    entity.postalCode = params.postalCode;

    return entity;
  }
}
