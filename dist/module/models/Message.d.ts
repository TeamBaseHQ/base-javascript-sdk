import User from './User';
import BaseModel from './BaseModel';
import Thread from './Thread';
import Media from './Media';
export default class Message extends BaseModel {
    /**
     * Message content
     */
    content: string;
    /**
     * Message type
     */
    type: string;
    /**
     * Message thread_id
     */
    thread_id: string;
    /**
     * Message sender_id
     */
    sender_id: string;
    /**
     * Message sender_type
     */
    sender_type: string;
    /**
     * Message slug
     */
    slug: string;
    /**
     * Message Sender
     */
    sender: User;
    /**
     * Thread
     */
    thread: Thread;
    /**
     * Attachments
     */
    attachments: Media[];
    /**
     * Get Message Sender
     *
     * @return {User} User
     */
    getSender(): User;
    /**
     * Set Message Sender
     *
     * @param {User} sender
     * @return
     * @return {Message}
     */
    setSender(sender: User): Message;
    /**
     * Message Content
     *
     * @return {string} Content
     */
    getContent(): string;
    /**
     * Set Message Content
     *
     * @param {string} content
     * @return
     * @return {Message}
     */
    setContent(content: string): Message;
    /**
     * Message Type
     *
     * @return {string} Type
     */
    getType(): string;
    /**
     * Set Message Type
     *
     * @param {string} type
     * @return
     * @return {Message}
     */
    setType(type: string): Message;
    /**
     * Message Thread_id
     *
     * @return {string} Thread_id
     */
    getThread_id(): string;
    /**
     * Set Message Thread_id
     *
     * @param {string} thread_id
     * @return
     * @return {Message}
     */
    setThread_id(thread_id: string): Message;
    /**
     * Message Sender_id
     *
     * @return {string} Sender_id
     */
    getSender_id(): string;
    /**
     * Set Message Sender_id
     *
     * @param {string} sender_id
     * @return
     * @return {Message}
     */
    setSender_id(sender_id: string): Message;
    /**
     * Message Sender_type
     *
     * @return {string} Sender_type
     */
    getSender_type(): string;
    /**
     * Set Message Sender_type
     *
     * @param {string} sender_type
     * @return
     * @return {Message}
     */
    setSender_type(sender_type: string): Message;
    /**
     * Message Slug
     *
     * @return {string} Slug
     */
    getSlug(): string;
    /**
     * Set Message Slug
     *
     * @param {string} slug
     * @return
     * @return {Message}
     */
    setSlug(slug: string): Message;
    getThread(): Thread;
    setThread(thread: Thread): Message;
    getAttachments(): Media[];
    setAttachments(attachments: Media[]): Message;
    constructor(data: any);
}
