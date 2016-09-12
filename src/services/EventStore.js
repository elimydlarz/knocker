import { Client } from 'node-rest-client';
import UUID from 'uuid';

export default class EventStore {
  constructor() {
    this.client = new Client({
      user: 'knocker',
      password: 'changeit',
      connection: { withCredentials: false }
    });
  }

  transmit(type, data, successFn, failureFn) {
    const headers = {
      'Content-Type': 'application/json',
      'ES-EventType': type,
      'ES-EventId': UUID.v4(),
    }

    this.client
      .post('http://127.0.0.1:2113/streams/knocker', { data, headers }, successFn)
      .on('error', failureFn);
  }
}
