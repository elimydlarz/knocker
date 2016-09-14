jest.mock('uuid');
jest.mock('./Window');

import Window from './Window';
import EventStore from './EventStore';

describe('EventStore', () => {
  it('transmit', () => {
    const auth = { user: 'USER', password: 'PASSWORD' };
    const eventType = 'test';
    const data = { testKey: 'TEST VALUE' };
    const responseHandler = jest.fn();

    const promise = jest.fn();
    Window.fetch.mockReturnValue({ then: promise });
    Window.btoa.mockImplementation(string => `ENCODED_${string}`);

    EventStore.transmit(auth, eventType, data, responseHandler);

    const expectedUrl = 'http://54.206.125.76:2113/streams/knocker';
    const expectedOptions = {
      'body': JSON.stringify(data),
      'method': 'POST',
      'headers': {
        'Authorization': `Basic ENCODED_${auth.user}:${auth.password}`,
        'Content-Type': 'application/json',
        'ES-EventType': eventType,
        'ES-EventId': 'UUID',
      },
    };

    expect(Window.fetch).toBeCalledWith(expectedUrl, expectedOptions);
    expect(promise).toBeCalledWith(responseHandler);
  });
});
