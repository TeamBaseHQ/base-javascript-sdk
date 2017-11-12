import AccessToken from './auth/AccessToken';
export default class BaseApp {
    clientId: string;
    clientSecret: string;
    apiUrl: string;
    private accessToken;
    constructor(clientId: string, clientSecret: string, apiUrl: string);
    getApiUrl(): string;
    setApiUrl(url: string): BaseApp;
    setClientId(id: string): BaseApp;
    setClientSecret(secret: string): BaseApp;
    getClientId(): string;
    getClientSecret(): string;
    getAccessToken(): AccessToken;
    setAccessToken(token: AccessToken): BaseApp;
}
