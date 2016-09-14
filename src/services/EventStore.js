import UUID from 'uuid';
import Window from './Window';

export default class EventStore {
  static transmit(auth, type, body, responseHandler) {
    const options = {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Window.btoa(`${auth.user}:${auth.password}`)}`,
        'Content-Type': 'application/json',
        'ES-EventType': type,
        'ES-EventId': UUID.v4(),
      },
      body: JSON.stringify(body),
    };

    Window.fetch('http://54.206.125.76:2113/streams/knocker', options)
      .then(responseHandler);
  }
}
