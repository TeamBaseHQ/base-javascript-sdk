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
}
