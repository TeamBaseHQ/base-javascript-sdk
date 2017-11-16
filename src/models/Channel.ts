class Channel {
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
   */
  public setName(name: string) {
    this.name = name;
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
   */
  public setDescription(description: string) {
    this.description = description;
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
   */
  public setColor(color: string) {
    this.color = color;
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
   */
  public setType(type: string) {
    this.type = type;
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
  public setUser_id(user_id: number) {
    this.user_id = user_id;
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
  public setTeam_id(team_id: number) {
    this.team_id = team_id;
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
   */
  public setSlug(slug: string) {
    this.slug = slug;
  }

  constructor() {
    this.name = null;
    this.description = null;
    this.color = null;
    this.type = null;
    this.user_id = null;
    this.team_id = null;
    this.slug = null;
  }
}
