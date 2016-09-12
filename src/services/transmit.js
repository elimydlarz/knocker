import UUID from 'uuid';

export default function transmit(type, body, responseHandler) {
  const options = {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${btoa('knocker:changeit')}`,
      'Content-Type': 'application/json',
      'ES-EventType': type,
      'ES-EventId': UUID.v4(),
    },
    body: JSON.stringify(body),
  };

  fetch('http://54.206.125.76:2113/streams/knocker', options)
    .then(responseHandler);
}
