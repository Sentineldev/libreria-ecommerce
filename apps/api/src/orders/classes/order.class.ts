import Account from 'src/accounts/classes/account.class';

export type OrderParams = {
  id: string;
  account: Account;
  status: string;
  date: string;
  totalDollars: number;
  totalBolivares: number;
};
export default class Order {
  public id: string;
  public account: Account;
  public status: string;
  public date: string;
  public totalBolivares: number;
  public totalDollars: number;

  constructor(params: OrderParams) {
    const { id, account, date, status, totalBolivares, totalDollars } = params;

    this.id = id;
    this.account = account;
    this.date = date;
    this.status = status;
    this.totalBolivares = totalBolivares;
    this.totalDollars = totalDollars;
  }
}
