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
}
