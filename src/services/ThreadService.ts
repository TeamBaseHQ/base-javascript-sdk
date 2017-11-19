import Thread from '../models/Thread';
import Base from '../Base';

export default class ThreadService {
  constructor(public base: Base) {
    //
  }

  static makeThreadFromResponse(response: any): Thread {
    const data = response.data ? response.data.data : {};
    return ThreadService.makeThread(data);
  }

  static makeThread(data: any): Thread {
    return (new Thread())
      .setSubject(data.subject)
      .setDescription(data.description)
      .setSlug(data.slug)
      .setUser_id(data.user_id);
  }

  /**
   * Get Thread.
   *
   * @param {string} team
   * @param {string} slug
   * @return {Thread}
   */
  public getThread(team: string, channel: string, slug: string): Promise<Thread> {
    return this.base.get(`/teams/${team}/channels/${channel}/threads/${slug}`).then((response) => {
      return ThreadService.makeThreadFromResponse(response);
    });
  }
}
