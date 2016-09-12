export default class EventStore {
  transmit(type, data, successFn, failureFn) {
    if (data.notes === 'FAIL') { failureFn(); }
    else { successFn(); }
  }
}
