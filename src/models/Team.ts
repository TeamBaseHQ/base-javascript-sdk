import BaseModel from './BaseModel';
import User from './User';
import Media from './Media';

export default class Team extends BaseModel {
  /**
   * Team name.
   */
  name: string;

  /**
   * Team description.
   */
  description: string;

  /**
   * Team invitation_code.
   */
  invitation_code: string;

  /**
   * Team user_id.
   */
  user_id: string;

  /**
   * Team slug.
   */
  slug: string;

  /**
   * Team Owner.
   */
  owner: User;

  /**
   * Picture
   */
  picture: Media;

  /**
   * Return User Name
   *
   * @return {string} Name
   */
  public getName(): string {
    return this.name;
  }

  /**
   * User Name
   *
   * @param {string} name
   * @return
   * @return {Team}
   */
  public setName(name: string): Team {
    this.name = name;
    return this;
  }

  /**
   * Return User Description
   *
   * @return {string} Description
   */
  public getDescription(): string {
    return this.description;
  }

  /**
   * User Description
   *
   * @param {string} description
   * @return
   * @return {Team}
   */
  public setDescription(description: string): Team {
    this.description = description;
    return this;
  }

  /**
   * Return User Invitation_code
   *
   * @return {string} Invitation_code
   */
  public getInvitation_code(): string {
    return this.invitation_code;
  }

  /**
   * User Invitation_code
   *
   * @param {string} invitation_code
   * @return
   * @return {Team}
   */
  public setInvitation_code(invitation_code: string): Team {
    this.invitation_code = invitation_code;
    return this;
  }

  /**
   * Return User User_id
   *
   * @return {string} User_id
   */
  public getUser_id(): string {
    return this.user_id;
  }

  /**
   * User User_id
   *
   * @param {string} user_id
   * @return
   * @return {Team}
   */
  public setUser_id(user_id: string): Team {
    this.user_id = user_id;
    return this;
  }

  /**
   * Get Owner.
   *
   * @return {User}
   */
  getOwner(): User {
    return this.owner;
  }

  /**
   * Set Owner.
   *
   * @param {User} owner
   */
  setOwner(owner: User) {
    this.owner = owner;
  }

  /**
   * Return User Slug
   *
   * @return {string} Slug
   */
  public getSlug(): string {
    return this.slug;
  }

  /**
   * User Slug
   *
   * @param {string} slug
   * @return
   * @return {Team}
   */
  public setSlug(slug: string): Team {
    this.slug = slug;
    return this;
  }

  public getPicture(): Media {
    return this.picture;
  }

  public setPicture(pic: Media): Team {
    this.picture = pic;
    return this;
  }

  constructor(data: any) {
    super(data);
    this.name = data.name;
    this.description = data.description;
    this.invitation_code = data.invitation_code;
    this.user_id = data.user_id;
    this.owner = data.owner;
    this.slug = data.slug;
    this.picture = new Media(data.picture);
  }
}
