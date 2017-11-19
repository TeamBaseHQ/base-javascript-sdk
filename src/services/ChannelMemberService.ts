import Base from '../Base';
import User from '../models/User';
import BaseCollection from '../models/BaseCollection';

export default class ChannelMemberService {
  constructor(public base: Base) {
    //
  }

  /**
   * Get Team Member.
   *
   * @param team
   * @param {string} slug
   * @param {string} user_id
   * @return {Promise<User>}
   */
  getChannelMember(team: string, slug: string, user_id: string): Promise<User> {
    return this.base.get(`/teams/${team}/channels/${slug}/members/${user_id}`)
      .then((response) => {
        return new User(response.data.data);
      });
  }

  /**
   * Get All Team Members.
   *
   * @param team
   * @param {string} slug
   * @param page
   * @param limit
   * @return {Promise<BaseCollection<User>>}
   */
  getAllChannelMembers(team: string, slug: string,
                    page: string = '1', limit?: string): Promise<BaseCollection<User>> {
    return this.base.get(`/teams/${team}/channels/${slug}/members`, {page, limit})
      .then((response) => {
        return new BaseCollection<User>(response.data, User);
      });
  }

  /**
   * Add Team Member.
   *
   * @param team
   * @param {string} slug
   * @param {string} user_id
   * @return {Promise<boolean>}
   */
  addChannelMember(team: string, slug: string, user_id: string): Promise<boolean> {
    return this.base.post(`/teams/${team}/channels/${slug}/members/`, {user_id})
      .then((response) => {
        return true;
      });
  }

  /**
   * Remove Team Member.
   *
   * @param team
   * @param {string} slug
   * @param {string} user_id
   * @return {Promise<boolean>}
   */
  removeChannelMember(team: string, slug: string, user_id: string): Promise<boolean> {
    return this.base.del(`/teams/${team}/channels/${slug}/members/${user_id}`)
      .then((response) => {
        return true;
      });
  }
}
