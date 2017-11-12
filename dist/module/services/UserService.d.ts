import Base from '../Base';
import User from '../models/User';
export default class UserService {
    base: Base;
    constructor(base: Base);
    static makeUser(data: any): User;
    getUser(id: string): Promise<User>;
}
