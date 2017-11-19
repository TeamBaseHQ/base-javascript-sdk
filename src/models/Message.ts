import User from './User';
import BaseModel from './BaseModel';

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
   * Get Message Sender
   *
   * @return {User} User
   */
  public getSender(): User {
    return this.sender;
  }

  /**
   * Set Message Sender
   *
   * @param {User} sender
   * @return
   * @return {Message}
   */
  public setSender(sender: User): Message {
    this.sender = sender;
    return this;
  }

  /**
   * Message Content
   *
   * @return {string} Content
   */
  public getContent(): string {
    return this.content;
  }

  /**
   * Set Message Content
   *
   * @param {string} content
   * @return
   * @return {Message}
   */
  public setContent(content: string): Message {
    this.content = content;
    return this;
  }

  /**
   * Message Type
   *
   * @return {string} Type
   */
  public getType(): string {
    return this.type;
  }

  /**
   * Set Message Type
   *
   * @param {string} type
   * @return
   * @return {Message}
   */
  public setType(type: string): Message {
    this.type = type;
    return this;
  }

  /**
   * Message Thread_id
   *
   * @return {string} Thread_id
   */
  public getThread_id(): string {
    return this.thread_id;
  }

  /**
   * Set Message Thread_id
   *
   * @param {string} thread_id
   * @return
   * @return {Message}
   */
  public setThread_id(thread_id: string): Message {
    this.thread_id = thread_id;
    return this;
  }

  /**
   * Message Sender_id
   *
   * @return {string} Sender_id
   */
  public getSender_id(): string {
    return this.sender_id;
  }

  /**
   * Set Message Sender_id
   *
   * @param {string} sender_id
   * @return
   * @return {Message}
   */
  public setSender_id(sender_id: string): Message {
    this.sender_id = sender_id;
    return this;
  }

  /**
   * Message Sender_type
   *
   * @return {string} Sender_type
   */
  public getSender_type(): string {
    return this.sender_type;
  }

  /**
   * Set Message Sender_type
   *
   * @param {string} sender_type
   * @return
   * @return {Message}
   */
  public setSender_type(sender_type: string): Message {
    this.sender_type = sender_type;
    return this;
  }

  /**
   * Message Slug
   *
   * @return {string} Slug
   */
  public getSlug(): string {
    return this.slug;
  }

  /**
   * Set Message Slug
   *
   * @param {string} slug
   * @return
   * @return {Message}
   */
  public setSlug(slug: string): Message {
    this.slug = slug;
    return this;
  }

  constructor() {
    super();
    this.content = null;
    this.type = null;
    this.thread_id = null;
    this.sender_id = null;
    this.sender_type = null;
    this.slug = null;
    this.sender = null;
  }
}
