import Base from '../Base';
import User from '../models/User';

export default class UserService {
  constructor(public base: Base) {
    //
  }

  static makeUser(data: any): User {
    return (new User()).setName(data.name).setEmail(data.email).setIsVerified(data.is_verified);
  }

  public getUser(id: string): Promise<User> {
    return this.base.get(`/users/${id}`).then((response) => {
      const data = response.data.data;
      return UserService.makeUser(data);
    });
  }
}
