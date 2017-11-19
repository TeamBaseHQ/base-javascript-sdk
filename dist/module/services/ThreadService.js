"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Thread_1 = require("../models/Thread");
var BaseCollection_1 = require("../models/BaseCollection");
var ThreadService = /** @class */ (function () {
    function ThreadService(base) {
        this.base = base;
        //
    }
    ThreadService.makeThreadFromResponse = function (response) {
        var data = response.data ? response.data.data : {};
        return ThreadService.makeThread(data);
    };
    ThreadService.makeThread = function (data) {
        return new Thread_1.default(data);
    };
    ThreadService.makeCollectionFromResponse = function (response) {
        var responseData = response.data;
        return new BaseCollection_1.default(responseData, Thread_1.default);
    };
    /**
     * Get Thread.
     *
     * @param {string} team
     * @param {string} slug
     * @return {Thread}
     */
    ThreadService.prototype.getThread = function (team, channel, slug) {
        return this.base.get("/teams/" + team + "/channels/" + channel + "/threads/" + slug)
            .then(function (response) {
            return ThreadService.makeThreadFromResponse(response);
        });
    };
    /**
     * Create Thread.
     *
     * @param {string} team
     * @param channel
     * @param {string} subject
     * @param {string} description
     * @return {Thread}
     */
    ThreadService.prototype.createThread = function (team, channel, subject, description) {
        return this.base.post("/teams/" + team + "/channels/" + channel + "/threads", {
            subject: subject, description: description,
        }).then(function (response) {
            return ThreadService.makeThreadFromResponse(response);
        });
    };
    /**
     * Update Thread.
     *
     * @param {string} team
     * @param channel
     * @param {string} slug
     * @param {string} subject
     * @param {string} description
     * @return {Thread}
     */
    ThreadService.prototype.updateThread = function (team, channel, slug, subject, description) {
        return this.base.patch("/teams/" + team + "/channels/" + channel + "/threads/" + slug, {
            subject: subject, description: description,
        }).then(function (response) {
            return ThreadService.makeThreadFromResponse(response);
        });
    };
    /**
     * List of Threads. Paginated.
     *
     * @param {string} team
     * @param channel
     * @param {string} page
     * @param {string} limit
     * @return {Promise<BaseCollection<Thread>>}
     */
    ThreadService.prototype.getAllThreads = function (team, channel, page, limit) {
        if (page === void 0) { page = '1'; }
        return this.base.get("/teams/" + team + "/channels/" + channel + "/threads", {
            page: page, limit: limit,
        }).then(function (response) {
            return ThreadService.makeCollectionFromResponse(response);
        });
    };
    /**
     * Delete Thread.
     *
     * @param {string} team
     * @param channel
     * @param {string} slug
     * @return {Thread}
     */
    ThreadService.prototype.deleteThread = function (team, channel, slug) {
        return this.base.del("/channels/" + channel + "/threads/" + slug)
            .then(function (response) {
            return true;
        });
    };
    return ThreadService;
}());
exports.default = ThreadService;
//# sourceMappingURL=ThreadService.js.map