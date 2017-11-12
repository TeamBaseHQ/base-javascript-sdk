export default class AxiosResponseHandler {
  /**
   * Handle Response.
   *
   * @param {Promise<any>} response
   * @return {Promise<any>}
   */
  static handle(response: Promise<any>): Promise<any> {
    return response;
  }
}
