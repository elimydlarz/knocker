jest.mock('./Window');

import EventStore from './EventStore';

describe('EventStore', () => {
  it('transmit', () => {
    const auth = { user: 'COOL USER', password: 'COOL PASSWORD' };
    const eventType = 'test';
    const data = { testKey: 'TEST VALUE' };
    const responseHandler = jest.fn();

    EventStore.transmit(auth, eventType, data, responseHandler);

    expect(responseHandler.mock.calls.length).toBe(1);
  });
});
