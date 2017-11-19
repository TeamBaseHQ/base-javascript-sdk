import Base from '../Base';
import User from '../models/User';

export default class UserService {
  constructor(public base: Base) {
    //
  }

  static makeUser(data: any): User {
    const user = new User();
    user.setName(data.name)
      .setEmail(data.email)
      .setIsVerified(data.is_verified)
      .setId(data.id)
      .setCreated_at(data.created_at)
      .setUpdated_at(data.updated_at);

    return user;
  }

  static makeUserFromResponse(response: any): User {
    const data = response.data ? response.data.data : {};
    return this.makeUser(data);
  }

  public getUser(id: string): Promise<User> {
    return this.base.get(`/users/${id}`).then((response) => {
      return UserService.makeUserFromResponse(response);
    });
  }

  public getCurrentUser(): Promise<User> {
    return this.getUser('me');
  }

  public createUser(name: string, email: string, password: string): Promise<User> {
    return this.base.post('/users', {name, email, password}).then((response) => {
      return UserService.makeUserFromResponse(response);
    });
  }

  public updateUser(name: string = '', email: string = '', password: string = ''): Promise<User> {
    return this.base.patch('/users/me', {name, email, password}).then((response) => {
      return UserService.makeUserFromResponse(response);
    });
  }

  public uploadProfilePicture(picture: File): Promise<any> {
    return this.base.post('/users/picture', {file: picture}).then((response) => {
      return UserService.makeUserFromResponse(response);
    });
  }
}
