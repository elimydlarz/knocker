export default class Window {
  static fetch = window.fetch.bind(window);
  static btoa = window.btoa.bind(window);
}
