import Thread from '../models/Thread';
import Base from '../Base';
import BaseCollection from '../models/BaseCollection';

export default class ThreadService {
  constructor(public base: Base) {
    //
  }

  static makeThreadFromResponse(response: any): Thread {
    const data = response.data ? response.data.data : {};
    return ThreadService.makeThread(data);
  }

  static makeThread(data: any): Thread {
    return new Thread(data);
  }

  static makeCollectionFromResponse(response: any): BaseCollection<Thread> {
    const responseData = response.data;
    return new BaseCollection(responseData, Thread);
  }

  /**
   * Get Thread.
   *
   * @param {string} team
   * @param {string} slug
   * @return {Thread}
   */
  public getThread(team: string, channel: string, slug: string): Promise<Thread> {
    return this.base.get(`/teams/${team}/channels/${channel}/threads/${slug}`)
      .then((response) => {
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
    return this.base.post(`/teams/${team}/channels/${channel}/threads`, {
      subject, description,
    }).then((response) => {
      return ThreadService.makeThreadFromResponse(response);
    });
  }

  /**
   * Update Thread.
   *
   * @param {string} team
   * @param channel
   * @param {string} slug
   * @param {string} subject
   * @param {string} description
   * @return {Thread}
   */
  public updateThread(team: string, channel: string, slug: string, subject?: string,
                      description?: string): Promise<Thread> {
    return this.base.patch(`/teams/${team}/channels/${channel}/threads/${slug}`, {
      subject, description,
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
   * @return {Promise<BaseCollection<Thread>>}
   */
  public getAllThreads(team: string, channel: string,
                       page: string = '1', limit?: string): Promise<BaseCollection<Thread>> {
    return this.base.get(`/teams/${team}/channels/${channel}/threads`, {
      page, limit,
    }).then((response) => {
      return ThreadService.makeCollectionFromResponse(response);
    });
  }

  /**
   * Delete Thread.
   *
   * @param {string} team
   * @param channel
   * @param {string} slug
   * @return {Thread}
   */
  public deleteThread(team: string, channel: string, slug: string): Promise<boolean> {
    return this.base.del(`/channels/${channel}/threads/${slug}`)
      .then((response) => {
        return true;
      });
  }
}
