export default class EventStore {
  transmit(type, data, successFn, failureFn) {
    // console.log(data);
    if (data.notes === 'FAIL') { failureFn(); }
    else { successFn(); }
  }
}
