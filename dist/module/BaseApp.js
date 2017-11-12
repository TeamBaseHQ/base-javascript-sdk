"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseApp = /** @class */ (function () {
    function BaseApp(clientId, clientSecret, apiUrl) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.apiUrl = apiUrl;
        //
    }
    BaseApp.prototype.getApiUrl = function () {
        return this.apiUrl;
    };
    BaseApp.prototype.setApiUrl = function (url) {
        this.apiUrl = url;
        return this;
    };
    BaseApp.prototype.setClientId = function (id) {
        this.clientId = id;
        return this;
    };
    BaseApp.prototype.setClientSecret = function (secret) {
        this.clientSecret = secret;
        return this;
    };
    BaseApp.prototype.getClientId = function () {
        return this.clientId;
    };
    BaseApp.prototype.getClientSecret = function () {
        return this.clientSecret;
    };
    BaseApp.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    BaseApp.prototype.setAccessToken = function (token) {
        this.accessToken = token;
        return this;
    };
    return BaseApp;
}());
exports.default = BaseApp;
//# sourceMappingURL=BaseApp.js.map