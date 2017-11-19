import Team from '../models/Team';
import Base from '../Base';
import BaseCollection from '../models/BaseCollection';

export default class TeamService {
  constructor(public base: Base) {
    //
  }

  static makeTeamFromResponse(response: any): Team {
    const data = response.data ? response.data.data : {};
    return TeamService.makeTeam(data);
  }

  static makeTeam(data: any): Team {
    return new Team(data);
  }

  static makeCollectionFromResponse(response: any): BaseCollection<Team> {
    const responseData = response.data;
    return new BaseCollection(responseData, Team);
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
    return this.base.post(`/teams`, {name, description}).then((response) => {
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
    return this.base.patch(`/teams/${slug}`, {name, description}).then((response) => {
      return TeamService.makeTeamFromResponse(response);
    });
  }

  /**
   * List of Teams. Paginated.
   *
   * @param {string} page
   * @param {string} limit
   * @return {Promise<BaseCollection<Team>>}
   */
  public getAllTeams(page: string = '0', limit?: string): Promise<BaseCollection<Team>> {
    return this.base.get(`/teams`, {page, limit}).then((response) => {
      return TeamService.makeCollectionFromResponse(response);
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
