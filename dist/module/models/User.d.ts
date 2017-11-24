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
    getName(): string;
    setName(name: string): User;
    getEmail(): string;
    setEmail(email: string): User;
    isVerified(): boolean;
    setIsVerified(is_verified: boolean): User;
    getPicture(): Media;
    setPicture(pic: Media): User;
    constructor(data: any);
}
