import Team from '../models/Team';
import Base from '../Base';
export default class TeamService {
    base: Base;
    constructor(base: Base);
    static makeTeamFromResponse(response: any): Team;
    static makeTeam(data: any): Team;
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
     * @return {Promise<Team>}
     */
    getAllTeams(page?: string, limit?: string): Promise<Team>;
    /**
     * Delete Team.
     *
     * @param {string} slug
     * @return {Team}
     */
    deleteTeam(slug: string): Promise<boolean>;
}
