export class Client {
  post(url, args, successFn) {
    const me = this;
    me.__postArgs = { url, args, successFn };

    return {
      on(type, failureFn) {
        me.__onArgs =  { type, failureFn };
      }
    };
  }
}
