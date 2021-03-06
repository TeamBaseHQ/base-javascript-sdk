import BaseModel from './BaseModel';
import User from './User';
import Team from './Team';

export default class Channel extends BaseModel {
  /**
   * Channel name
   */
  name: string;

  /**
   * Channel description
   */
  description: string;

  /**
   * Channel color
   */
  color: string;

  /**
   * Channel type
   */
  type: string;

  /**
   * Channel user_id
   */
  user_id: number;

  /**
   * Channel team_id
   */
  team_id: number;

  /**
   * Channel slug
   */
  slug: string;

  /**
   * Channel Owner.
   */
  owner: User;

  /**
   * Team
   */
  team: Team;

  /**
   * Return Channel Name
   *
   * @return {string} Name
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Set Channel Name
   *
   * @param {string} name
   * @return {Channel}
   */
  public setName(name: string): Channel {
    this.name = name;
    return this;
  }

  /**
   * Return Channel Description
   *
   * @return {string} Description
   */
  public getDescription(): string {
    return this.description;
  }

  /**
   * Set Channel Description
   *
   * @param {string} description
   * @return {Channel}
   */
  public setDescription(description: string): Channel {
    this.description = description;
    return this;
  }

  /**
   * Return Channel Color
   *
   * @return {string} Color
   */
  public getColor(): string {
    return this.color;
  }

  /**
   * Set Channel Color
   *
   * @param {string} color
   * @return {Channel}
   */
  public setColor(color: string): Channel {
    this.color = color;
    return this;
  }

  /**
   * Return Channel Type
   *
   * @return {string} Type
   */
  public getType(): string {
    return this.type;
  }

  /**
   * Set Channel Type
   *
   * @param {string} type
   * @return {Channel}
   */
  public setType(type: string): Channel {
    this.type = type;
    return this;
  }

  /**
   * Return Channel User_id
   *
   * @return {number} User_id
   */
  public getUser_id(): number {
    return this.user_id;
  }

  /**
   * Set Channel User_id
   *
   * @param {number} user_id
   */
  public setUser_id(user_id: number): Channel {
    this.user_id = user_id;
    return this;
  }

  /**
   * Return Channel Team_id
   *
   * @return {number} Team_id
   */
  public getTeam_id(): number {
    return this.team_id;
  }

  /**
   * Set Channel Team_id
   *
   * @param {number} team_id
   */
  public setTeam_id(team_id: number): Channel {
    this.team_id = team_id;
    return this;
  }

  /**
   * Return Channel Slug
   *
   * @return {string} Slug
   */
  public getSlug(): string {
    return this.slug;
  }

  /**
   * Set Channel Slug
   *
   * @param {string} slug
   * @return {Channel}
   */
  public setSlug(slug: string): Channel {
    this.slug = slug;
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
   * Get Team.
   *
   * @return {Team}
   */
  getTeam(): Team {
    return this.team;
  }

  /**
   * Set Team.
   *
   * @param {Team} team
   */
  setTeam(team: Team) {
    this.team = team;
  }

  constructor(data: any) {
    if (data) {
      super(data);
      this.name = data.name;
      this.description = data.description;
      this.color = data.color;
      this.type = data.type;
      this.user_id = data.user_id;
      this.team_id = data.team_id;
      this.owner = new User(data.owner);
      this.team = new Team(data.team);
      this.slug = data.slug;
    }
  }
}
