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
}
