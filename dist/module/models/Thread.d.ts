import BaseModel from './BaseModel';
import User from './User';
export default class Thread extends BaseModel {
    subject: string;
    description: string;
    user_id: string;
    channel_id: string;
    slug: string;
    /**
     * Thread Owner
     */
    owner: User;
    /**
     * Get Thread Owner
     *
     * @return User
     */
    getOwner(): User;
    /**
     * Set Thread Owner
     *
     * @param owner
     * @return
     */
    setOwner(owner: User): Thread;
    /**
     * Return Thread Subject
     *
     * @return Subject
     */
    getSubject(): string;
    /**
     * Thread Subject
     *
     * @param subject
     * @return
     */
    setSubject(subject: string): Thread;
    /**
     * Return Thread Description
     *
     * @return Description
     */
    getDescription(): string;
    /**
     * Thread Description
     *
     * @param description
     * @return
     */
    setDescription(description: string): Thread;
    /**
     * Return Thread User_id
     *
     * @return User_id
     */
    getUser_id(): string;
    /**
     * Thread User_id
     *
     * @param user_id
     * @return
     */
    setUser_id(user_id: string): Thread;
    /**
     * Return Thread Channel_id
     *
     * @return Channel_id
     */
    getChannel_id(): string;
    /**
     * Thread Channel_id
     *
     * @param channel_id
     * @return
     */
    setChannel_id(channel_id: string): Thread;
    /**
     * Return Thread Slug
     *
     * @return Slug
     */
    getSlug(): string;
    /**
     * Thread Slug
     *
     * @param slug
     * @return
     */
    setSlug(slug: string): Thread;
    constructor(data: any);
}
