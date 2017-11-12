"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccessToken = /** @class */ (function () {
    function AccessToken(access_token, expires_in, refresh_token) {
        this.access_token = access_token;
        this.expires_in = expires_in;
        this.refresh_token = refresh_token;
        //
    }
    AccessToken.prototype.getAccessToken = function () {
        return this.access_token;
    };
    AccessToken.prototype.setAccessToken = function (access_token) {
        this.access_token = access_token;
        return this;
    };
    AccessToken.prototype.getExpiresIn = function () {
        return this.expires_in;
    };
    AccessToken.prototype.setExpiresIn = function (expires_in) {
        this.expires_in = expires_in;
        return this;
    };
    AccessToken.prototype.getRefreshToken = function () {
        return this.refresh_token;
    };
    AccessToken.prototype.setRefreshToken = function (refresh_token) {
        this.refresh_token = refresh_token;
        return this;
    };
    AccessToken.prototype.toString = function () {
        return this.getAccessToken();
    };
    return AccessToken;
}());
exports.default = AccessToken;
//# sourceMappingURL=AccessToken.js.map