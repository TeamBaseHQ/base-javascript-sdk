import Base from '../Base';
import Message from '../models/Message';
import BaseCollection from '../models/BaseCollection';
export default class MessageService {
    base: Base;
    constructor(base: Base);
    static makeMessageFromResponse(response: any): Message;
    static makeMessage(data: any): Message;
    static makeCollectionFromResponse(response: any): BaseCollection<Message>;
    /**
     * Get Message.
     *
     * @param {string} team
     * @param channel
     * @param thread
     * @param {string} slug
     * @return {Message}
     */
    getMessage(team: string, channel: string, thread: string, slug: string): Promise<Message>;
    /**
     * Create Message.
     *
     * @param {string} team
     * @param channel
     * @param thread
     * @param {string} content
     * @param {string} type
     * @return {Message}
     */
    createMessage(team: string, channel: string, thread: string, content: string, type?: string): Promise<Message>;
    /**
     * Update Message.
     *
     * @param {string} team
     * @param channel
     * @param thread
     * @param {string} slug
     * @param {string} content
     * @param {string} type
     * @return {Message}
     */
    updateMessage(team: string, channel: string, thread: string, slug: string, content?: string, type?: string): Promise<Message>;
    /**
     * List of Messages. Paginated.
     *
     * @param {string} team
     * @param channel
     * @param thread
     * @param {string} page
     * @param {string} limit
     * @return {Promise<BaseCollection<Message>>}
     */
    getAllMessages(team: string, channel: string, thread: string, page?: string, limit?: string): Promise<BaseCollection<Message>>;
    /**
     * Delete Message.
     *
     * @param {string} team
     * @param channel
     * @param thread
     * @param {string} slug
     * @return {Message}
     */
    deleteMessage(team: string, channel: string, thread: string, slug: string): Promise<boolean>;
}
