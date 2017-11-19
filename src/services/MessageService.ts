import Base from '../Base';
import Message from '../models/Message';

export default class MessageService {
  constructor(public base: Base) {
    //
  }

  static makeMessageFromResponse(response: any): Message {
    const data = response.data ? response.data.data : {};
    return MessageService.makeMessage(data);
  }

  static makeMessage(data: any): Message {
    return (new Message())
      .setType(data.type)
      .setContent(data.content)
      .setSlug(data.slug)
      .setUser_id(data.user_id);
  }

  /**
   * Get Message.
   *
   * @param {string} team
   * @param channel
   * @param thread
   * @param {string} slug
   * @return {Message}
   */
  public getMessage(team: string, channel: string, thread: string, slug: string): Promise<Message> {
    return this.base.get(`/teams/${team}/channels/${channel}/threads/${thread}/messages/${slug}`)
      .then((response) => {
        return MessageService.makeMessageFromResponse(response);
      });
  }
}
