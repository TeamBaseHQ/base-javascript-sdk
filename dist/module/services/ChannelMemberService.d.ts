import Base from '../Base';
import User from '../models/User';
import BaseCollection from '../models/BaseCollection';
export default class ChannelMemberService {
    base: Base;
    constructor(base: Base);
    /**
     * Get Team Member.
     *
     * @param team
     * @param {string} slug
     * @param {string} user_id
     * @return {Promise<User>}
     */
    getChannelMember(team: string, slug: string, user_id: string): Promise<User>;
    /**
     * Get All Team Members.
     *
     * @param team
     * @param {string} slug
     * @param page
     * @param limit
     * @return {Promise<BaseCollection<User>>}
     */
    getAllChannelMembers(team: string, slug: string, page?: string, limit?: string): Promise<BaseCollection<User>>;
    /**
     * Add Team Member.
     *
     * @param team
     * @param {string} slug
     * @param {string} user_id
     * @return {Promise<boolean>}
     */
    addChannelMember(team: string, slug: string, user_id: string): Promise<boolean>;
    /**
     * Remove Team Member.
     *
     * @param team
     * @param {string} slug
     * @param {string} user_id
     * @return {Promise<boolean>}
     */
    removeChannelMember(team: string, slug: string, user_id: string): Promise<boolean>;
}
