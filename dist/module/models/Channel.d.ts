import BaseModel from './BaseModel';
import User from './User';
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
     * Team Owner.
     */
    owner: User;
    /**
     * Return Channel Name
     *
     * @return {string} Name
     */
    getName(): string;
    /**
     * Set Channel Name
     *
     * @param {string} name
     * @return {Channel}
     */
    setName(name: string): Channel;
    /**
     * Return Channel Description
     *
     * @return {string} Description
     */
    getDescription(): string;
    /**
     * Set Channel Description
     *
     * @param {string} description
     * @return {Channel}
     */
    setDescription(description: string): Channel;
    /**
     * Return Channel Color
     *
     * @return {string} Color
     */
    getColor(): string;
    /**
     * Set Channel Color
     *
     * @param {string} color
     * @return {Channel}
     */
    setColor(color: string): Channel;
    /**
     * Return Channel Type
     *
     * @return {string} Type
     */
    getType(): string;
    /**
     * Set Channel Type
     *
     * @param {string} type
     * @return {Channel}
     */
    setType(type: string): Channel;
    /**
     * Return Channel User_id
     *
     * @return {number} User_id
     */
    getUser_id(): number;
    /**
     * Set Channel User_id
     *
     * @param {number} user_id
     */
    setUser_id(user_id: number): Channel;
    /**
     * Return Channel Team_id
     *
     * @return {number} Team_id
     */
    getTeam_id(): number;
    /**
     * Set Channel Team_id
     *
     * @param {number} team_id
     */
    setTeam_id(team_id: number): Channel;
    /**
     * Return Channel Slug
     *
     * @return {string} Slug
     */
    getSlug(): string;
    /**
     * Set Channel Slug
     *
     * @param {string} slug
     * @return {Channel}
     */
    setSlug(slug: string): Channel;
    /**
     * Get Owner.
     *
     * @return {User}
     */
    getOwner(): User;
    /**
     * Set Owner.
     *
     * @param {User} owner
     */
    setOwner(owner: User): void;
    constructor(data: any);
}
