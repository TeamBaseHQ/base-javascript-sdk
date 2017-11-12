import AccessToken from './auth/AccessToken';

export default class BaseApp {
  private accessToken: AccessToken;

  public constructor(public clientId: string, public clientSecret: string, public apiUrl: string) {
    //
  }

  public getApiUrl(): string {
    return this.apiUrl;
  }

  public setApiUrl(url: string): BaseApp {
    this.apiUrl = url;
    return this;
  }

  public setClientId(id: string): BaseApp {
    this.clientId = id;
    return this;
  }

  public setClientSecret(secret: string): BaseApp {
    this.clientSecret = secret;
    return this;
  }

  public getClientId(): string {
    return this.clientId;
  }

  public getClientSecret(): string {
    return this.clientSecret;
  }

  public getAccessToken(): AccessToken {
    return this.accessToken;
  }

  public setAccessToken(token: AccessToken): BaseApp {
    this.accessToken = token;
    return this;
  }
}
