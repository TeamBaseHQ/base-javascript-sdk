import BaseModel from './BaseModel';
import Media from './Media';

export default class User extends BaseModel {
  /**
   * User name.
   */
  name: string;

  /**
   * User email.
   */
  email: string;

  /**
   * Is Verified
   */
  is_verified: boolean;

  /**
   * Profile Picture
   */
  picture: Media;

  public getName(): string {
    return this.name;
  }

  public setName(name: string): User {
    this.name = name;
    return this;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): User {
    this.email = email;
    return this;
  }

  public isVerified(): boolean {
    return this.is_verified;
  }

  public setIsVerified(is_verified: boolean): User {
    this.is_verified = is_verified;
    return this;
  }

  public getPicture(): object {
    return this.picture;
  }

  public setPicture(pic: Media): object {
    this.picture = pic;
    return this;
  }

  constructor(data: any) {
    super(data);
    this.name = data.name;
    this.email = data.email;
    this.is_verified = data.is_verified;
    this.picture = data.picture;
  }
}
