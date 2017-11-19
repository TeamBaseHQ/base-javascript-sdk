import BaseModel from './BaseModel';

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

  constructor() {
    super();
    this.name = null;
    this.email = null;
    this.is_verified = false;
  }
}
