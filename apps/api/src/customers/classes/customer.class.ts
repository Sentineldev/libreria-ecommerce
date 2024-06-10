export type CustomerParams = {
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
export default class Customer {
  public id: string;
  public firstName: string;
  public lastName: string;
  public birthDate: string;
  public gender: string;
  public country: string;
  public city: string;
  public state: string;
  public address: string;
  public postalCode: string;

  constructor(params: CustomerParams) {
    const {
      id,
      firstName,
      lastName,
      birthDate,
      gender,
      country,
      city,
      state,
      address,
      postalCode,
    } = params;

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.gender = gender;
    this.country = country;
    this.city = city;
    this.state = state;
    this.address = address;
    this.postalCode = postalCode;
  }
}
