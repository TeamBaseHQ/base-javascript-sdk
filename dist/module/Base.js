"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var AccessToken_1 = require("./auth/AccessToken");
var AxiosHttpClient_1 = require("./http/clients/AxiosHttpClient");
var UserService_1 = require("./services/UserService");
var ChannelService_1 = require("./services/ChannelService");
var Base = /** @class */ (function () {
    /**
     * Create Base Client.
     *
     * @param {BaseApp} baseApp
     * @param {HttpClientInterface} httpClient
     */
    function Base(baseApp, httpClient) {
        this.baseApp = baseApp;
        this.httpClient = httpClient;
        if (!httpClient) {
            this.httpClient = new AxiosHttpClient_1.default(axios_1.default.create());
        }
        this.bootstrapServices();
    }
    /**
     * Bootstrap Services.
     */
    Base.prototype.bootstrapServices = function () {
        this.userServiceObj = new UserService_1.default(this);
        this.channelServiceObj = new ChannelService_1.default(this);
    };
    Base.prototype.getHttpClient = function () {
        return this.httpClient;
    };
    Base.prototype.setHttpClient = function (value) {
        this.httpClient = value;
    };
    Base.prototype.getApp = function () {
        return this.baseApp;
    };
    Base.prototype.setApp = function (value) {
        this.baseApp = value;
    };
    /**
     * Send a get request.
     *
     * @param {string} endpoint
     * @param {Object} params
     *
     * @return {Promise<any>}
     */
    Base.prototype.get = function (endpoint, params) {
        if (params === void 0) { params = {}; }
        return this
            .prepare()
            .httpClient.get(this.buildUrl(endpoint), params);
    };
    /**
     * Send a post request.
     *
     * @param {string} endpoint
     * @param {Object} params
     *
     * @return {Promise<any>}
     */
    Base.prototype.post = function (endpoint, params) {
        if (params === void 0) { params = {}; }
        return this
            .prepare()
            .httpClient.post(this.buildUrl(endpoint), params);
    };
    /**
     * Send a put request.
     *
     * @param {string} endpoint
     * @param {Object} params
     *
     * @return {Promise<any>}
     */
    Base.prototype.put = function (endpoint, params) {
        if (params === void 0) { params = {}; }
        return this
            .prepare()
            .httpClient.put(this.buildUrl(endpoint), params);
    };
    /**
     * Send a patch request.
     *
     * @param {string} endpoint
     * @param {Object} params
     *
     * @return {Promise<any>}
     */
    Base.prototype.patch = function (endpoint, params) {
        if (params === void 0) { params = {}; }
        return this
            .prepare()
            .httpClient.patch(this.buildUrl(endpoint), params);
    };
    /**
     * Send a del request.
     *
     * @param {string} endpoint
     * @param {Object} params
     *
     * @return {Promise<any>}
     */
    Base.prototype.del = function (endpoint, params) {
        if (params === void 0) { params = {}; }
        return this
            .prepare()
            .httpClient.del(this.buildUrl(endpoint), params);
    };
    Base.prototype.prepare = function () {
        this.addAuthHeaders();
        return this;
    };
    Base.prototype.addAuthHeaders = function () {
        this.httpClient
            .addHeader('X-CLIENT-ID', this.getApp().getClientId())
            .addHeader('X-CLIENT-SECRET', this.getApp().getClientSecret());
        var accessToken = this.getApp().getAccessToken();
        if (accessToken instanceof AccessToken_1.default) {
            this.httpClient.addHeader('Authorization', "Bearer " + accessToken.getAccessToken());
        }
    };
    Base.prototype.buildUrl = function (endpoint) {
        return this.getApp().getApiUrl().concat(endpoint);
    };
    Base.prototype.getUserAccessToken = function (email, password) {
        return this.post('/users/login', { email: email, password: password }).then(function (response) {
            var data = response.data.data;
            return new AccessToken_1.default(data.access_token, data.expires_in, data.refresh_token);
        });
    };
    /**
     * Get User Service object.
     *
     * @return {UserService}
     */
    Base.prototype.userService = function () {
        return this.userServiceObj;
    };
    /**
     * Get Channel Service object.
     *
     * @return {ChannelService}
     */
    Base.prototype.channelService = function () {
        return this.channelServiceObj;
    };
    return Base;
}());
exports.default = Base;
//# sourceMappingURL=Base.js.map