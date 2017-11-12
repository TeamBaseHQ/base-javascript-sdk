export default class AccessToken {
    access_token: any;
    expires_in: any;
    refresh_token: any;
    constructor(access_token?: any, expires_in?: any, refresh_token?: any);
    getAccessToken(): string;
    setAccessToken(access_token: string): AccessToken;
    getExpiresIn(): string;
    setExpiresIn(expires_in: string): AccessToken;
    getRefreshToken(): string;
    setRefreshToken(refresh_token: string): AccessToken;
    toString(): string;
}
