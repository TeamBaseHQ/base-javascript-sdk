import HttpClientInterface from './http/HttpClientInterface';
import BaseApp from './BaseApp';
import AccessToken from './auth/AccessToken';
import UserService from './services/UserService';
import ChannelService from './services/ChannelService';
import TeamService from './services/TeamService';
import MessageService from './services/MessageService';
import ThreadService from './services/ThreadService';
export default class Base {
    baseApp: BaseApp;
    httpClient: HttpClientInterface;
    /**
     * User Service Object.
     */
    private userServiceObj;
    /**
     * Team Service Object.
     */
    private teamServiceObj;
    /**
     * Channel Service Object.
     */
    private channelServiceObj;
    /**
     * Thread Service Object.
     */
    private threadServiceObj;
    /**
     * Message Service Object.
     */
    private messageServiceObj;
    /**
     * Create Base Client.
     *
     * @param {BaseApp} baseApp
     * @param {HttpClientInterface} httpClient
     */
    constructor(baseApp: BaseApp, httpClient?: HttpClientInterface);
    /**
     * Bootstrap Services.
     */
    private bootstrapServices();
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
    /**
     * Get User Service object.
     *
     * @return {UserService}
     */
    userService(): UserService;
    /**
     * Get Channel Service object.
     *
     * @return {ChannelService}
     */
    channelService(): ChannelService;
    /**
     * Get Team Service object.
     *
     * @return {TeamService}
     */
    teamService(): TeamService;
    /**
     * Get Thread Service object.
     *
     * @return {ThreadService}
     */
    threadService(): ThreadService;
    /**
     * Get Message Service object.
     *
     * @return {MessageService}
     */
    messageService(): MessageService;
}
