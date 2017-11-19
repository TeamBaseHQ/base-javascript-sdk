import BaseModel from './BaseModel';
import User from './User';

export default class Thread extends BaseModel {

  /*
   *  Thread subject
   */
  subject: string;
  /*
   *  Thread description
   */
  description: string;
  /*
   *  Thread user_id
   */
  user_id: string;
  /*
   *  Thread channel_id
   */
  channel_id: string;
  /*
   *  Thread slug
   */
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
  public getOwner(): User {
    return this.owner;
  }

  /**
   * Set Thread Owner
   *
   * @param owner
   * @return
   */
  public setOwner(owner: User): Thread {
    this.owner = owner;
    return this;
  }

  /**
   * Return Thread Subject
   *
   * @return Subject
   */
  public getSubject(): string {
    return this.subject;
  }

  /**
   * Thread Subject
   *
   * @param subject
   * @return
   */
  public setSubject(subject: string): Thread {
    this.subject = subject;
    return this;
  }

  /**
   * Return Thread Description
   *
   * @return Description
   */
  public getDescription(): string {
    return this.description;
  }

  /**
   * Thread Description
   *
   * @param description
   * @return
   */
  public setDescription(description: string): Thread {
    this.description = description;
    return this;
  }

  /**
   * Return Thread User_id
   *
   * @return User_id
   */
  public getUser_id(): string {
    return this.user_id;
  }

  /**
   * Thread User_id
   *
   * @param user_id
   * @return
   */
  public setUser_id(user_id: string): Thread {
    this.user_id = user_id;
    return this;
  }

  /**
   * Return Thread Channel_id
   *
   * @return Channel_id
   */
  public getChannel_id(): string {
    return this.channel_id;
  }

  /**
   * Thread Channel_id
   *
   * @param channel_id
   * @return
   */
  public setChannel_id(channel_id: string): Thread {
    this.channel_id = channel_id;
    return this;
  }

  /**
   * Return Thread Slug
   *
   * @return Slug
   */
  public getSlug(): string {
    return this.slug;
  }

  /**
   * Thread Slug
   *
   * @param slug
   * @return
   */
  public setSlug(slug: string): Thread {
    this.slug = slug;
    return this;
  }

  constructor() {
    super();
    this.subject = null;
    this.description = null;
    this.user_id = null;
    this.channel_id = null;
    this.slug = null;
    this.owner = null;
  }
}
