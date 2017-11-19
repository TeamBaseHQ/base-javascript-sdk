"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Channel_1 = require("../models/Channel");
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
        return (new Channel_1.default())
            .setName(data.name)
            .setDescription(data.description)
            .setSlug(data.slug)
            .setUser_id(data.user_id);
    };
    /**
     * Get Channel.
     *
     * @param team
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
     * @param team
     * @param {string} name
     * @param {string} description
     * @return {Channel}
     */
    ChannelService.prototype.createChannel = function (team, name, description) {
        return this.base.post("/teams/" + team + "/channels").then(function (response) {
            return ChannelService.makeChannelFromResponse(response);
        });
    };
    /**
     * Update Channel.
     *
     * @param team
     * @param {string} slug
     * @param {string} name
     * @param {string} description
     * @return {Channel}
     */
    ChannelService.prototype.updateChannel = function (team, slug, name, description) {
        return this.base.patch("/teams/" + team + "/channels/" + slug).then(function (response) {
            return ChannelService.makeChannelFromResponse(response);
        });
    };
    /**
     * List of Channels. Paginated.
     *
     * @param team
     * @param {string} page
     * @param {string} limit
     * @return {Promise<Channel>}
     */
    ChannelService.prototype.getAllChannels = function (team, page, limit) {
        if (page === void 0) { page = '1'; }
        return this.base.get("/teams/" + team + "/channels", { page: page, limit: limit }).then(function (response) {
            return ChannelService.makeChannelFromResponse(response);
        });
    };
    /**
     * Delete Channel.
     *
     * @param {string} slug
     * @return {Channel}
     */
    ChannelService.prototype.deleteChannel = function (slug) {
        return this.base.del("/channels/" + slug).then(function (response) {
            return true;
        });
    };
    return ChannelService;
}());
exports.default = ChannelService;
//# sourceMappingURL=ChannelService.js.map