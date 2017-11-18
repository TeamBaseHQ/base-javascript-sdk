import Channel from '../models/Channel';
import Base from '../Base';

export default class ChannelService {
  constructor(public base: Base) {
    //
  }

  static makeChannelFromResponse(response: any): Channel {
    const data = response.data ? response.data.data : {};
    return ChannelService.makeChannel(data);
  }

  static makeChannel(data: any): Channel {
    return (new Channel())
      .setName(data.name)
      .setDescription(data.description)
      .setSlug(data.slug)
      .setUser_id(data.user_id);
  }

  /**
   * Get Channel.
   *
   * @param {string} slug
   * @return {Channel}
   */
  public getChannel(slug: string): Promise<Channel> {
    return this.base.get(`/channels/${slug}`).then((response) => {
      return ChannelService.makeChannelFromResponse(response);
    });
  }

  /**
   * Create Channel.
   *
   * @param {string} name
   * @param {string} description
   * @return {Channel}
   */
  public createChannel(name: string, description?: string): Promise<Channel> {
    return this.base.post(`/channels`).then((response) => {
      return ChannelService.makeChannelFromResponse(response);
    });
  }
}
