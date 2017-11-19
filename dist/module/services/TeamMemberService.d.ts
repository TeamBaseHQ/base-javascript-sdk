import Base from '../Base';
import User from '../models/User';
import BaseCollection from '../models/BaseCollection';
export default class TeamMemberService {
    base: Base;
    constructor(base: Base);
    /**
     * Get Team Member.
     *
     * @param {string} slug
     * @param {string} user_id
     * @return {Promise<User>}
     */
    getTeamMember(slug: string, user_id: string): Promise<User>;
    /**
     * Get All Team Members.
     *
     * @param {string} slug
     * @param page
     * @param limit
     * @return {Promise<BaseCollection<User>>}
     */
    getAllTeamMembers(slug: string, page?: string, limit?: string): Promise<BaseCollection<User>>;
    /**
     * Add Team Member.
     *
     * @param {string} slug
     * @param {string} user_id
     * @return {Promise<boolean>}
     */
    addTeamMember(slug: string, user_id: string): Promise<boolean>;
    /**
     * Remove Team Member.
     *
     * @param {string} slug
     * @param {string} user_id
     * @return {Promise<boolean>}
     */
    removeTeamMember(slug: string, user_id: string): Promise<boolean>;
}
