"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AxiosResponseHandler_1 = require("../handlers/AxiosResponseHandler");
var AxiosHttpClient = /** @class */ (function () {
    function AxiosHttpClient(client) {
        this.client = client;
        //
    }
    AxiosHttpClient.prototype.get = function (url, params) {
        return AxiosResponseHandler_1.default.handle(this.client
            .get(url, params));
    };
    AxiosHttpClient.prototype.post = function (url, params) {
        return AxiosResponseHandler_1.default.handle(this.client
            .post(url, params));
    };
    AxiosHttpClient.prototype.put = function (url, params) {
        return AxiosResponseHandler_1.default.handle(this.client
            .put(url, params));
    };
    AxiosHttpClient.prototype.patch = function (url, params) {
        return AxiosResponseHandler_1.default.handle(this.client
            .patch(url, params));
    };
    AxiosHttpClient.prototype.del = function (url, params) {
        return AxiosResponseHandler_1.default.handle(this.client
            .delete(url, params));
    };
    AxiosHttpClient.prototype.setHeaders = function (headers) {
        for (var key in headers) {
            this.client.defaults.headers[key] = headers[key];
        }
        return this;
    };
    AxiosHttpClient.prototype.getHeaders = function () {
        return this.client
            .defaults
            .headers;
    };
    AxiosHttpClient.prototype.addHeader = function (key, value) {
        this.client
            .defaults
            .headers[key] = value;
        return this;
    };
    return AxiosHttpClient;
}());
exports.default = AxiosHttpClient;
//# sourceMappingURL=AxiosHttpClient.js.map