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
   * @return {Promise<BaseCollection<User>>}
   */
  getAllTeamMembers(slug: string): Promise<BaseCollection<User>> {
    return this.base.get(`/teams/${slug}/members`)
      .then((response) => {
        return new BaseCollection<User>(response.data, User);
      });
  }

}
