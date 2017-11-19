"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message_1 = require("../models/Message");
var BaseCollection_1 = require("../models/BaseCollection");
var MessageService = /** @class */ (function () {
    function MessageService(base) {
        this.base = base;
        //
    }
    MessageService.makeMessageFromResponse = function (response) {
        var data = response.data ? response.data.data : {};
        return MessageService.makeMessage(data);
    };
    MessageService.makeMessage = function (data) {
        return new Message_1.default(data);
    };
    MessageService.makeCollectionFromResponse = function (response) {
        var responseData = response.data;
        return new BaseCollection_1.default(responseData, Message_1.default);
    };
    /**
     * Get Message.
     *
     * @param {string} team
     * @param channel
     * @param thread
     * @param {string} slug
     * @return {Message}
     */
    MessageService.prototype.getMessage = function (team, channel, thread, slug) {
        return this.base.get("/teams/" + team + "/channels/" + channel + "/threads/" + thread + "/messages/" + slug)
            .then(function (response) {
            return MessageService.makeMessageFromResponse(response);
        });
    };
    /**
     * Create Message.
     *
     * @param {string} team
     * @param channel
     * @param thread
     * @param {string} content
     * @param {string} type
     * @return {Message}
     */
    MessageService.prototype.createMessage = function (team, channel, thread, content, type) {
        return this.base.post("/teams/" + team + "/channels/" + channel + "/threads/" + thread, {
            content: content, type: type,
        }).then(function (response) { return MessageService.makeMessageFromResponse(response); });
    };
    /**
     * Update Message.
     *
     * @param {string} team
     * @param channel
     * @param thread
     * @param {string} slug
     * @param {string} content
     * @param {string} type
     * @return {Message}
     */
    MessageService.prototype.updateMessage = function (team, channel, thread, slug, content, type) {
        return this.base.patch("/teams/" + team + "/channels/" + channel + "/threads/" + thread + "/messages/" + slug, {
            content: content, type: type,
        }).then(function (response) { return MessageService.makeMessageFromResponse(response); });
    };
    /**
     * List of Messages. Paginated.
     *
     * @param {string} team
     * @param channel
     * @param thread
     * @param {string} page
     * @param {string} limit
     * @return {Promise<BaseCollection<Message>>}
     */
    MessageService.prototype.getAllMessages = function (team, channel, thread, page, limit) {
        if (page === void 0) { page = '1'; }
        return this.base.get("/teams/" + team + "/channels/" + channel + "/threads/" + thread, {
            page: page, limit: limit,
        }).then(function (response) { return MessageService.makeCollectionFromResponse(response); });
    };
    /**
     * Delete Message.
     *
     * @param {string} team
     * @param channel
     * @param thread
     * @param {string} slug
     * @return {Message}
     */
    MessageService.prototype.deleteMessage = function (team, channel, thread, slug) {
        return this.base.del("/channels/" + channel + "/threads/" + thread + "/messages/" + slug)
            .then(function (response) {
            return true;
        });
    };
    return MessageService;
}());
exports.default = MessageService;
//# sourceMappingURL=MessageService.js.map