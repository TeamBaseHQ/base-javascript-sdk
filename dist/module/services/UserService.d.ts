import Base from '../Base';
import User from '../models/User';
export default class UserService {
    base: Base;
    constructor(base: Base);
    static makeUser(data: any): User;
    static makeUserFromResponse(response: any): User;
    getUser(id: string): Promise<User>;
    getCurrentUser(): Promise<User>;
    createUser(name: string, email: string, password: string): Promise<User>;
    updateUser(name?: string, email?: string, password?: string): Promise<User>;
}
