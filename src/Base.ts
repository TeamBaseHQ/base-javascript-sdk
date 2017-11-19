import HttpClientInterface from './http/HttpClientInterface';
import axios from 'axios';
import BaseApp from './BaseApp';
import AccessToken from './auth/AccessToken';
import AxiosHttpClient from './http/clients/AxiosHttpClient';
import UserService from './services/UserService';
import ChannelService from './services/ChannelService';
import TeamService from './services/TeamService';

export default class Base {

  /**
   * User Service Object.
   */
  private userServiceObj: UserService;

  /**
   * Channel Service Object.
   */
  private channelServiceObj: ChannelService;

  /**
   * Team Service Object.
   */
  private teamServiceObj: TeamService;

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
    this.channelServiceObj = new ChannelService(this);
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
}
