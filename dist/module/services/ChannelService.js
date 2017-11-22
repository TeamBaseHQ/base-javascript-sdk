"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Channel_1 = require("../models/Channel");
var BaseCollection_1 = require("../models/BaseCollection");
var Media_1 = require("../models/Media");
var ChannelService = /** @class */ (function () {
    function ChannelService(base) {
        this.base = base;
        //
    }
    ChannelService.makeChannelFromResponse = function (response) {
        var data = response.data ? response.data.data : {};
        return ChannelService.makeChannel(data);
    };
    ChannelService.makeChannel = function (data) {
        return new Channel_1.default(data);
    };
    ChannelService.makeCollectionFromResponse = function (response) {
        var responseData = response.data;
        return new BaseCollection_1.default(responseData, Channel_1.default);
    };
    /**
     * Get Channel.
     *
     * @param {string} team
     * @param {string} slug
     * @return {Channel}
     */
    ChannelService.prototype.getChannel = function (team, slug) {
        return this.base.get("/teams/" + team + "/channels/" + slug).then(function (response) {
            return ChannelService.makeChannelFromResponse(response);
        });
    };
    /**
     * Create Channel.
     *
     * @param {string} team
     * @param {string} name
     * @param {string} description
     * @param color
     * @param is_private
     * @return {Channel}
     */
    ChannelService.prototype.createChannel = function (team, name, description, color, is_private) {
        if (is_private === void 0) { is_private = false; }
        return this.base.post("/teams/" + team + "/channels", {
            name: name, description: description, color: color, is_private: is_private,
        }).then(function (response) {
            return ChannelService.makeChannelFromResponse(response);
        });
    };
    /**
     * Update Channel.
     *
     * @param {string} team
     * @param {string} slug
     * @param {string} name
     * @param {string} description
     * @param color
     * @param is_private
     * @return {Channel}
     */
    ChannelService.prototype.updateChannel = function (team, slug, name, description, color, is_private) {
        if (is_private === void 0) { is_private = false; }
        return this.base.patch("/teams/" + team + "/channels/" + slug, {
            name: name, description: description, color: color, is_private: is_private,
        }).then(function (response) {
            return ChannelService.makeChannelFromResponse(response);
        });
    };
    /**
     * List of Channels. Paginated.
     *
     * @param {string} team
     * @param {string} page
     * @param {string} limit
     * @return {Promise<BaseCollection<Channel>>}
     */
    ChannelService.prototype.getAllChannels = function (team, page, limit) {
        if (page === void 0) { page = '1'; }
        return this.base.get("/teams/" + team + "/channels", {
            page: page, limit: limit,
        }).then(function (response) {
            return ChannelService.makeCollectionFromResponse(response);
        });
    };
    /**
     * Delete Channel.
     *
     * @param {string} team
     * @param {string} slug
     * @return {Channel}
     */
    ChannelService.prototype.deleteChannel = function (team, slug) {
        return this.base.del("/channels/" + slug).then(function (response) {
            return true;
        });
    };
    ChannelService.prototype.uploadMedia = function (team, slug, files) {
        return this.base.post("/channels/" + slug + "/media").then(function (response) {
            var data = response.data ? response.data.data : [];
            return data.map(function (mediaData) {
                return new Media_1.default(mediaData);
            });
        });
    };
    return ChannelService;
}());
exports.default = ChannelService;
//# sourceMappingURL=ChannelService.js.map