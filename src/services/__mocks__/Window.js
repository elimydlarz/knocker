export default class Window {
  static fetch(url, options) {
    return { then: responseHandler => responseHandler() }
  }

  static btoa(string) {
    return `ENCODED_${string}`;
  }
}
