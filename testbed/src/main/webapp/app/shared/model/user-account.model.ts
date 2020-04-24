export interface IUserAccount {
  id?: number;
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
  adress?: string;
}

export class UserAccount implements IUserAccount {
  constructor(
    public id?: number,
    public name?: string,
    public surname?: string,
    public email?: string,
    public password?: string,
    public adress?: string
  ) {}
}
