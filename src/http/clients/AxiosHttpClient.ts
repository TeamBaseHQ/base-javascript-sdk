import HttpClientInterface from '../HttpClientInterface';
import AxiosResponseHandler from '../handlers/AxiosResponseHandler';

import {
  AxiosInstance,
} from 'axios';

export default class AxiosHttpClient implements HttpClientInterface {

  public constructor(public client: AxiosInstance) {
    //
  }

  public get(url: string, params: object): Promise<any> {
    return AxiosResponseHandler.handle(this.client
      .get(url, params));
  }

  public post(url: string, params: object): Promise<any> {
    return AxiosResponseHandler.handle(this.client
      .post(url, params));
  }

  public put(url: string, params: object): Promise<any> {
    return AxiosResponseHandler.handle(this.client
      .put(url, params));
  }

  public patch(url: string, params: object): Promise<any> {
    return AxiosResponseHandler.handle(this.client
      .patch(url, params));
  }

  public del(url: string, params: object): Promise<any> {
    return AxiosResponseHandler.handle(this.client
      .delete(url, params));
  }

  setHeaders(headers: object): HttpClientInterface {
    for (let key in headers) {
      this.client.defaults.headers[key] = headers[key];
    }

    return this;
  }

  getHeaders(): object {
    return this.client
      .defaults
      .headers;
  }

  addHeader(key: string, value: string): HttpClientInterface {
    this.client
      .defaults
      .headers[key] = value;

    return this;
  }
}
