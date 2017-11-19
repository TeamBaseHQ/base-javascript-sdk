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

  /**
   * Create Message.
   *
   * @param {string} team
   * @param channel
   * @param thread
   * @param {string} content
   * @param {string} type
   * @return {Message}
   */
  public createMessage(team: string, channel: string, thread: string,
                       content: string, type?: string): Promise<Message> {
    return this.base.post(`/teams/${team}/channels/${channel}/threads/${thread}`, {
      content, type,
    }).then((response) => {
      return MessageService.makeMessageFromResponse(response);
    });
  }

  /**
   * Update Message.
   *
   * @param {string} team
   * @param channel
   * @param thread
   * @param {string} slug
   * @param {string} content
   * @param {string} type
   * @return {Message}
   */
  public updateMessage(team: string, channel: string, thread: string,
                       slug: string, content?: string, type?: string): Promise<Message> {
    return this.base.patch(
      `/teams/${team}/channels/${channel}/threads/${thread}/messages/${slug}`, {
        content, type,
      }).then((response) => {
      return MessageService.makeMessageFromResponse(response);
    });
  }

  /**
   * List of Messages. Paginated.
   *
   * @param {string} team
   * @param channel
   * @param {string} page
   * @param {string} limit
   * @return {Promise<Message>}
   */
  public getAllMessages(team: string, channel: string, thread: string,
                        page: string = '1', limit?: string): Promise<Message> {
    return this.base.get(`/teams/${team}/channels/${channel}/threads/${thread}`, {
      page, limit,
    }).then((response) => {
      return MessageService.makeMessageFromResponse(response);
    });
  }
}