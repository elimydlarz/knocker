jest.mock('node-rest-client');
jest.mock('uuid');

import EventStore from './EventStore';

describe('transmit', () => {
  it('sends correct args to client#post', () => {
    const subject = new EventStore();
    subject.transmit('TYPE', 'DATA', 'SUCCESS_FN', 'FAILURE_FN')

    const expectedPostArgs = {
      url: 'http://127.0.0.1:2113/streams/knocker',
      args: {
        data: 'DATA',
        headers: {
          'Content-Type': 'application/json',
          'ES-EventType': 'TYPE',
          'ES-EventId': 'UUID',
        },
      },
      successFn: 'SUCCESS_FN',
    };

    expect(subject.client.__postArgs).toEqual(expectedPostArgs);
  });

  it('supplies failure function to client#on', () => {
    const subject = new EventStore();
    subject.transmit('TYPE', 'DATA', 'SUCCESS_FN', 'FAILURE_FN')

    const expectedOnArgs = {
      type: 'error',
      failureFn: 'FAILURE_FN',
    };

    expect(subject.client.__onArgs).toEqual(expectedOnArgs);
  });
});
