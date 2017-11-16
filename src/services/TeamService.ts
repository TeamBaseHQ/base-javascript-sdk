import Team from '../models/Team';
import Base from '../Base';

export default class TeamService {
  constructor(public base: Base) {
    //
  }

  static makeTeamFromResponse(response: any): Team {
    const data = response.data ? response.data.data : {};
    return TeamService.makeTeam(data);
  }

  static makeTeam(data: any): Team {
    return (new Team())
      .setName(data.name)
      .setDescription(data.description)
      .setSlug(data.slug)
      .setUser_id(data.user_id);
  }

  /**
   * Get Team.
   *
   * @param {string} slug
   * @return {Team}
   */
  public getTeam(slug: string): Promise<Team> {
    return this.base.get(`/teams/${slug}`).then((response) => {
      return TeamService.makeTeamFromResponse(response);
    });
  }

  /**
   * Create Team.
   *
   * @param {string} name
   * @param {string} description
   * @return {Team}
   */
  public createTeam(name: string, description?: string): Promise<Team> {
    return this.base.post(`/teams`).then((response) => {
      return TeamService.makeTeamFromResponse(response);
    });
  }

  /**
   * Update Team.
   *
   * @param {string} slug
   * @param {string} name
   * @param {string} description
   * @return {Team}
   */
  public updateTeam(slug: string, name?: string, description?: string): Promise<Team> {
    return this.base.patch(`/teams/${slug}`).then((response) => {
      return TeamService.makeTeamFromResponse(response);
    });
  }

  /**
   * List of Teams. Paginated.
   *
   * @param {string} page
   * @param {string} limit
   * @return {Promise<Team>}
   */
  public getAllTeams(page: string = '0', limit?: string): Promise<Team> {
    return this.base.get(`/teams`, {page, limit}).then((response) => {
      return TeamService.makeTeamFromResponse(response);
    });
  }

  /**
   * Delete Team.
   *
   * @param {string} slug
   * @return {Team}
   */
  public deleteTeam(slug: string): Promise<boolean> {
    return this.base.del(`/teams/${slug}`).then((response) => {
      return true;
    });
  }
}
