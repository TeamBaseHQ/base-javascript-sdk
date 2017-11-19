import Channel from '../models/Channel';
import Base from '../Base';
import BaseCollection from '../models/BaseCollection';

export default class ChannelService {
  constructor(public base: Base) {
    //
  }

  static makeChannelFromResponse(response: any): Channel {
    const data = response.data ? response.data.data : {};
    return ChannelService.makeChannel(data);
  }

  static makeChannel(data: any): Channel {
    return new Channel(data);
  }

  static makeCollectionFromResponse(response: any): BaseCollection<Channel> {
    const responseData = response.data;
    return new BaseCollection(responseData, Channel);
  }

  /**
   * Get Channel.
   *
   * @param {string} team
   * @param {string} slug
   * @return {Channel}
   */
  public getChannel(team: string, slug: string): Promise<Channel> {
    return this.base.get(`/teams/${team}/channels/${slug}`).then((response) => {
      return ChannelService.makeChannelFromResponse(response);
    });
  }

  /**
   * Create Channel.
   *
   * @param {string} team
   * @param {string} name
   * @param {string} description
   * @param color
   * @param is_private
   * @return {Channel}
   */
  public createChannel(team: string, name: string, description?: string,
                       color?: string, is_private: boolean = false): Promise<Channel> {
    return this.base.post(`/teams/${team}/channels`, {
      name, description, color, is_private,
    }).then((response) => {
      return ChannelService.makeChannelFromResponse(response);
    });
  }

  /**
   * Update Channel.
   *
   * @param {string} team
   * @param {string} slug
   * @param {string} name
   * @param {string} description
   * @param color
   * @param is_private
   * @return {Channel}
   */
  public updateChannel(team: string, slug: string, name?: string, description?: string,
                       color?: string, is_private: boolean = false): Promise<Channel> {
    return this.base.patch(`/teams/${team}/channels/${slug}`, {
      name, description, color, is_private,
    }).then((response) => {
      return ChannelService.makeChannelFromResponse(response);
    });
  }

  /**
   * List of Channels. Paginated.
   *
   * @param {string} team
   * @param {string} page
   * @param {string} limit
   * @return {Promise<BaseCollection<Channel>>}
   */
  public getAllChannels(team: string, page: string = '1',
                        limit?: string): Promise<BaseCollection<Channel>> {
    return this.base.get(`/teams/${team}/channels`, {
      page, limit,
    }).then((response) => {
      return ChannelService.makeCollectionFromResponse(response);
    });
  }

  /**
   * Delete Channel.
   *
   * @param {string} team
   * @param {string} slug
   * @return {Channel}
   */
  public deleteChannel(team: string, slug: string): Promise<boolean> {
    return this.base.del(`/channels/${slug}`).then((response) => {
      return true;
    });
  }
}
