import HttpClientInterface from './http/HttpClientInterface';
import BaseApp from './BaseApp';
import AccessToken from './auth/AccessToken';
export default class Base {
    baseApp: BaseApp;
    httpClient: HttpClientInterface;
    /**
     * Create Base Client.
     *
     * @param {BaseApp} baseApp
     * @param {HttpClientInterface} httpClient
     */
    constructor(baseApp: BaseApp, httpClient?: HttpClientInterface);
    getHttpClient(): HttpClientInterface;
    setHttpClient(value: HttpClientInterface): void;
    getApp(): BaseApp;
    setApp(value: BaseApp): void;
    /**
     * Send a get request.
     *
     * @param {string} endpoint
     * @param {Object} params
     *
     * @return {Promise<any>}
     */
    get(endpoint: string, params?: object): Promise<any>;
    /**
     * Send a post request.
     *
     * @param {string} endpoint
     * @param {Object} params
     *
     * @return {Promise<any>}
     */
    post(endpoint: string, params?: object): Promise<any>;
    /**
     * Send a put request.
     *
     * @param {string} endpoint
     * @param {Object} params
     *
     * @return {Promise<any>}
     */
    put(endpoint: string, params?: object): Promise<any>;
    /**
     * Send a patch request.
     *
     * @param {string} endpoint
     * @param {Object} params
     *
     * @return {Promise<any>}
     */
    patch(endpoint: string, params?: object): Promise<any>;
    /**
     * Send a del request.
     *
     * @param {string} endpoint
     * @param {Object} params
     *
     * @return {Promise<any>}
     */
    del(endpoint: string, params?: object): Promise<any>;
    private prepare();
    private addAuthHeaders();
    private buildUrl(endpoint);
    getUserAccessToken(email: string, password: string): Promise<AccessToken>;
}
