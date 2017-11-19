import Base from '../Base';
import User from '../models/User';
import BaseCollection from '../models/BaseCollection';

export default class TeamMemberService {
  constructor(public base: Base) {
    //
  }

  public User

  /**
   * Get Team Member.
   *
   * @param {string} slug
   * @param {string} user_id
   * @return {Promise<User>}
   */
  getTeamMember(slug: string, user_id: string): Promise<User> {
    return this.base.get(`/teams/${slug}/members/${user_id}`)
      .then((response) => {
        return new User(response.data.data);
      });
  }

  /**
   * Get All Team Members.
   *
   * @param {string} slug
   * @param page
   * @param limit
   * @return {Promise<BaseCollection<User>>}
   */
  getAllTeamMembers(slug: string,
                    page: string = '1', limit?: string): Promise<BaseCollection<User>> {
    return this.base.get(`/teams/${slug}/members`, {page, limit})
      .then((response) => {
        return new BaseCollection<User>(response.data, User);
      });
  }

  /**
   * Add Team Member.
   *
   * @param {string} slug
   * @param {string} user_id
   * @return {Promise<boolean>}
   */
  addTeamMember(slug: string, user_id: string): Promise<boolean> {
    return this.base.post(`/teams/${slug}/members/`, {user_id})
      .then((response) => {
        return true;
      });
  }
}
