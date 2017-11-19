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

  /**
   * Create Thread.
   *
   * @param {string} team
   * @param channel
   * @param {string} subject
   * @param {string} description
   * @return {Thread}
   */
  public createThread(team: string, channel: string, subject: string, description?: string): Promise<Thread> {
    return this.base.post(`/teams/${team}/channels/${channel}`, {subject, description}).then((response) => {
      return ThreadService.makeThreadFromResponse(response);
    });
  }

  /**
   * Update Thread.
   *
   * @param {string} team
   * @param {string} slug
   * @param {string} subject
   * @param {string} description
   * @return {Thread}
   */
  public updateThread(team: string, channel: string, slug: string, subject?: string,
                      description?: string): Promise<Thread> {
    return this.base.patch(`/teams/${team}/channels/${channel}/threads/${slug}`, {
      subject, description
    }).then((response) => {
      return ThreadService.makeThreadFromResponse(response);
    });
  }

  /**
   * List of Threads. Paginated.
   *
   * @param {string} team
   * @param channel
   * @param {string} page
   * @param {string} limit
   * @return {Promise<Thread>}
   */
  public getAllThreads(team: string, channel: string, page: string = '1', limit?: string): Promise<Thread> {
    return this.base.get(`/teams/${team}/channels/${channel}/threads`, {page, limit}).then((response) => {
      return ThreadService.makeThreadFromResponse(response);
    });
  }
}
