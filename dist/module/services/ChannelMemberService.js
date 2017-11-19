"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../models/User");
var BaseCollection_1 = require("../models/BaseCollection");
var ChannelMemberService = /** @class */ (function () {
    function ChannelMemberService(base) {
        this.base = base;
        //
    }
    /**
     * Get Team Member.
     *
     * @param team
     * @param {string} slug
     * @param {string} user_id
     * @return {Promise<User>}
     */
    ChannelMemberService.prototype.getChannelMember = function (team, slug, user_id) {
        return this.base.get("/teams/" + team + "/channels/" + slug + "/members/" + user_id)
            .then(function (response) {
            return new User_1.default(response.data.data);
        });
    };
    /**
     * Get All Team Members.
     *
     * @param team
     * @param {string} slug
     * @param page
     * @param limit
     * @return {Promise<BaseCollection<User>>}
     */
    ChannelMemberService.prototype.getAllChannelMembers = function (team, slug, page, limit) {
        if (page === void 0) { page = '1'; }
        return this.base.get("/teams/" + team + "/channels/" + slug + "/members", { page: page, limit: limit })
            .then(function (response) {
            return new BaseCollection_1.default(response.data, User_1.default);
        });
    };
    /**
     * Add Team Member.
     *
     * @param team
     * @param {string} slug
     * @param {string} user_id
     * @return {Promise<boolean>}
     */
    ChannelMemberService.prototype.addChannelMember = function (team, slug, user_id) {
        return this.base.post("/teams/" + team + "/channels/" + slug + "/members/", { user_id: user_id })
            .then(function (response) {
            return true;
        });
    };
    /**
     * Remove Team Member.
     *
     * @param team
     * @param {string} slug
     * @param {string} user_id
     * @return {Promise<boolean>}
     */
    ChannelMemberService.prototype.removeChannelMember = function (team, slug, user_id) {
        return this.base.del("/teams/" + team + "/channels/" + slug + "/members/" + user_id)
            .then(function (response) {
            return true;
        });
    };
    return ChannelMemberService;
}());
exports.default = ChannelMemberService;
//# sourceMappingURL=ChannelMemberService.js.map