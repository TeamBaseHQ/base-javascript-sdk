import HttpClientInterface from '../HttpClientInterface';
import { AxiosInstance } from 'axios';
export default class AxiosHttpClient implements HttpClientInterface {
    client: AxiosInstance;
    constructor(client: AxiosInstance);
    get(url: string, params: object): Promise<any>;
    post(url: string, params: object): Promise<any>;
    put(url: string, params: object): Promise<any>;
    patch(url: string, params: object): Promise<any>;
    del(url: string, params: object): Promise<any>;
    setHeaders(headers: object): HttpClientInterface;
    getHeaders(): object;
    addHeader(key: string, value: string): HttpClientInterface;
}
