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
    getName(): string;
    setName(name: string): User;
    getEmail(): string;
    setEmail(email: string): User;
    isVerified(): boolean;
    setIsVerified(is_verified: boolean): User;
    constructor(data: any);
}
