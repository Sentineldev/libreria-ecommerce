import Customer from 'src/customers/classes/customer.class';

export type AccountParams = {
  id: string;
  email: string;
  password: string;
  customer: Customer;
};
export default class Account {
  public id: string;
  public email: string;
  public password: string;
  public customer: Customer;

  constructor(params: AccountParams) {
    const { id, email, password, customer } = params;
    this.id = id;
    this.email = email;
    this.password = password;
    this.customer = customer;
  }
}
