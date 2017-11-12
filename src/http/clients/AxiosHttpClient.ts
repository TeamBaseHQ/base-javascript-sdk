import axios, {
  AxiosInstance,
} from 'axios';
import HttpClientInterface from '../HttpClientInterface';

export default class AxiosHttpClient implements HttpClientInterface {

  public constructor(public client?: AxiosInstance) {
    if (!client) {
      this.client = axios.create();
    }
  }

  public get(url: string, params: object): Promise<any> {
    return this.client
      .get(url, params);
  }

  public post(url: string, params: object): Promise<any> {
    return this.client
      .post(url, params);
  }

  public put(url: string, params: object): Promise<any> {
    return this.client
      .put(url, params);
  }

  public patch(url: string, params: object): Promise<any> {
    return this.client
      .patch(url, params);
  }

  public del(url: string, params: object): Promise<any> {
    return this.client
      .delete(url, params);
  }

  setHeaders(headers: object): HttpClientInterface {
    this.client
      .defaults
      .headers = headers;

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
