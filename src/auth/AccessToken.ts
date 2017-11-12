export default class AccessToken {

  public constructor(public access_token?: any,
                     public expires_in?: any,
                     public refresh_token?: any) {
    //
  }

  public getAccessToken(): string {
    return this.access_token;
  }

  public setAccessToken(access_token: string): AccessToken {
    this.access_token = access_token;
    return this;
  }

  public getExpiresIn(): string {
    return this.expires_in;
  }

  public setExpiresIn(expires_in: string): AccessToken {
    this.expires_in = expires_in;
    return this;
  }

  public getRefreshToken(): string {
    return this.refresh_token;
  }

  public setRefreshToken(refresh_token: string): AccessToken {
    this.refresh_token = refresh_token;
    return this;
  }

  public toString(): string {
    return this.getAccessToken();
  }
}
