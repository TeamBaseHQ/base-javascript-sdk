import Team from '../models/Team';
import Base from '../Base';
import BaseCollection from '../models/BaseCollection';
export default class TeamService {
    base: Base;
    constructor(base: Base);
    static makeTeamFromResponse(response: any): Team;
    static makeTeam(data: any): Team;
    static makeCollectionFromResponse(response: any): BaseCollection<Team>;
    /**
     * Get Team.
     *
     * @param {string} slug
     * @return {Team}
     */
    getTeam(slug: string): Promise<Team>;
    /**
     * Create Team.
     *
     * @param {string} name
     * @param {string} description
     * @return {Team}
     */
    createTeam(name: string, description?: string): Promise<Team>;
    /**
     * Update Team.
     *
     * @param {string} slug
     * @param {string} name
     * @param {string} description
     * @return {Team}
     */
    updateTeam(slug: string, name?: string, description?: string): Promise<Team>;
    /**
     * List of Teams. Paginated.
     *
     * @param {string} page
     * @param {string} limit
     * @return {Promise<BaseCollection<Team>>}
     */
    getAllTeams(page?: string, limit?: string): Promise<BaseCollection<Team>>;
    /**
     * Delete Team.
     *
     * @param {string} slug
     * @return {Team}
     */
    deleteTeam(slug: string): Promise<boolean>;
}
