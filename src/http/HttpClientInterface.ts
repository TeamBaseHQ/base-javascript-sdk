export default interface HttpClientInterface {
  /**
   * Send a get request.
   *
   * @param {string} url
   * @param {Object} params
   *
   * @return {Promise<any>}
   */
  get(url: string, params: object): Promise<any>;

  /**
   * Send a post request.
   *
   * @param {string} url
   * @param {Object} params
   *
   * @return {Promise<any>}
   */
  post(url: string, params: object): Promise<any>;

  /**
   * Send a put request.
   *
   * @param {string} url
   * @param {Object} params
   *
   * @return {Promise<any>}
   */
  put(url: string, params: object): Promise<any>;

  /**
   * Send a patch request.
   *
   * @param {string} url
   * @param {Object} params
   *
   * @return {Promise}<any>
   */
  patch(url: string, params: object): Promise<any>;

  /**
   * Send a del request.
   *
   * @param {string} url
   * @param {Object} params
   *
   * @return {Promise<any>}
   */
  del(url: string, params: object): Promise<any>;

  /**
   * Set Headers.
   *
   * @param {Object} headers
   *
   * @return {HttpClientInterface}
   */
  setHeaders(headers: object): HttpClientInterface;

  /**
   * Get Headers.
   *
   * @return {Object}
   */
  getHeaders(): object;

  /**
   * Add Header.
   *
   * @param {string} key
   * @param {string} value
   * @return {HttpClientInterface}
   */
  addHeader(key: string, value: string): HttpClientInterface;
}
