import HttpClientInterface from './http/HttpClientInterface';
import axios from 'axios';
import BaseApp from './BaseApp';
import AccessToken from './auth/AccessToken';
import AxiosHttpClient from './http/clients/AxiosHttpClient';
import UserService from './services/UserService';
import ChannelService from './services/ChannelService';
import TeamService from './services/TeamService';
import MessageService from './services/MessageService';
import ThreadService from './services/ThreadService';
import TeamMemberService from './services/TeamMemberService';
import ChannelMemberService from './services/ChannelMemberService';

export default class Base {

  /**
   * User Service Object.
   */
  private userServiceObj: UserService;

  /**
   * Team Service Object.
   */
  private teamServiceObj: TeamService;

  /**
   * Channel Service Object.
   */
  private channelServiceObj: ChannelService;

  /**
   * TeamMember Service Object.
   */
  private teamMemberServiceObj: TeamMemberService;

  /**
   * ChannelMember Service Object.
   */
  private channelMemberServiceObj: ChannelMemberService;

  /**
   * Thread Service Object.
   */
  private threadServiceObj: ThreadService;

  /**
   * Message Service Object.
   */
  private messageServiceObj: MessageService;

  /**
   * Create Base Client.
   *
   * @param {BaseApp} baseApp
   * @param {HttpClientInterface} httpClient
   */
  constructor(public baseApp: BaseApp, public httpClient?: HttpClientInterface) {
    if (!httpClient) {
      this.httpClient = new AxiosHttpClient(axios.create());
    }

    this.bootstrapServices();
  }

  /**
   * Bootstrap Services.
   */
  private bootstrapServices(): void {
    this.userServiceObj = new UserService(this);
    this.teamServiceObj = new TeamService(this);
    this.channelServiceObj = new ChannelService(this);
    this.teamMemberServiceObj = new TeamMemberService(this);
    this.channelMemberServiceObj = new ChannelMemberService(this);
    this.messageServiceObj = new MessageService(this);
    this.threadServiceObj = new ThreadService(this);
  }

  public getHttpClient(): HttpClientInterface {
    return this.httpClient;
  }

  public setHttpClient(value: HttpClientInterface) {
    this.httpClient = value;
  }

  public getApp(): BaseApp {
    return this.baseApp;
  }

  public setApp(value: BaseApp) {
    this.baseApp = value;
  }

  /**
   * Send a get request.
   *
   * @param {string} endpoint
   * @param {Object} params
   *
   * @return {Promise<any>}
   */
  public get(endpoint: string, params: object = {}): Promise<any> {
    return this
      .prepare()
      .httpClient.get(this.buildUrl(endpoint), params);
  }

  /**
   * Send a post request.
   *
   * @param {string} endpoint
   * @param {Object} params
   *
   * @return {Promise<any>}
   */
  public post(endpoint: string, params: object = {}): Promise<any> {
    return this
      .prepare()
      .httpClient.post(this.buildUrl(endpoint), params);
  }

  /**
   * Send a put request.
   *
   * @param {string} endpoint
   * @param {Object} params
   *
   * @return {Promise<any>}
   */
  public put(endpoint: string, params: object = {}): Promise<any> {
    return this
      .prepare()
      .httpClient.put(this.buildUrl(endpoint), params);
  }

  /**
   * Send a patch request.
   *
   * @param {string} endpoint
   * @param {Object} params
   *
   * @return {Promise<any>}
   */
  public patch(endpoint: string, params: object = {}): Promise<any> {
    return this
      .prepare()
      .httpClient.patch(this.buildUrl(endpoint), params);
  }

  /**
   * Send a del request.
   *
   * @param {string} endpoint
   * @param {Object} params
   *
   * @return {Promise<any>}
   */
  public del(endpoint: string, params: object = {}): Promise<any> {
    return this
      .prepare()
      .httpClient.del(this.buildUrl(endpoint), params);
  }

  private prepare(): Base {
    this.addAuthHeaders();
    return this;
  }

  private addAuthHeaders(): void {
    this.httpClient
      .addHeader('X-CLIENT-ID', this.getApp().getClientId())
      .addHeader('X-CLIENT-SECRET', this.getApp().getClientSecret());

    const accessToken = this.getApp().getAccessToken();

    if (accessToken instanceof AccessToken) {
      this.httpClient.addHeader('Authorization', `Bearer ${accessToken.getAccessToken()}`);
    }
  }

  private buildUrl(endpoint: string): string {
    return this.getApp().getApiUrl().concat(endpoint);
  }

  public getUserAccessToken(email: string, password: string): Promise<AccessToken> {
    return this.post('/users/login', {email, password}).then((response) => {
      const data = response.data.data;
      return new AccessToken(data.access_token, data.expires_in, data.refresh_token);
    });
  }

  /**
   * Get User Service object.
   *
   * @return {UserService}
   */
  public userService(): UserService {
    return this.userServiceObj;
  }

  /**
   * Get Channel Service object.
   *
   * @return {ChannelService}
   */
  public channelService(): ChannelService {
    return this.channelServiceObj;
  }

  /**
   * Get Team Service object.
   *
   * @return {TeamService}
   */
  public teamService(): TeamService {
    return this.teamServiceObj;
  }

  /**
   * Get Thread Service object.
   *
   * @return {ThreadService}
   */
  public threadService(): ThreadService {
    return this.threadServiceObj;
  }

  /**
   * Get Message Service object.
   *
   * @return {MessageService}
   */
  public messageService(): MessageService {
    return this.messageServiceObj;
  }

  /**
   * Get ChannelMember Service object.
   *
   * @return {ChannelMemberService}
   */
  public channelMemberService(): ChannelMemberService {
    return this.channelMemberServiceObj;
  }

  /**
   * Get TeamMember Service object.
   *
   * @return {TeamMemberService}
   */
  public teamMemberService(): TeamMemberService {
    return this.teamMemberServiceObj;
  }
}
