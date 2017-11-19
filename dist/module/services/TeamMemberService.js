"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../models/User");
var BaseCollection_1 = require("../models/BaseCollection");
var TeamMemberService = /** @class */ (function () {
    function TeamMemberService(base) {
        this.base = base;
        //
    }
    /**
     * Get Team Member.
     *
     * @param {string} slug
     * @param {string} user_id
     * @return {Promise<User>}
     */
    TeamMemberService.prototype.getTeamMember = function (slug, user_id) {
        return this.base.get("/teams/" + slug + "/members/" + user_id)
            .then(function (response) {
            return new User_1.default(response.data.data);
        });
    };
    /**
     * Get All Team Members.
     *
     * @param {string} slug
     * @param page
     * @param limit
     * @return {Promise<BaseCollection<User>>}
     */
    TeamMemberService.prototype.getAllTeamMembers = function (slug, page, limit) {
        if (page === void 0) { page = '1'; }
        return this.base.get("/teams/" + slug + "/members", { page: page, limit: limit })
            .then(function (response) {
            return new BaseCollection_1.default(response.data, User_1.default);
        });
    };
    /**
     * Add Team Member.
     *
     * @param {string} slug
     * @param {string} user_id
     * @return {Promise<boolean>}
     */
    TeamMemberService.prototype.addTeamMember = function (slug, user_id) {
        return this.base.post("/teams/" + slug + "/members/", { user_id: user_id })
            .then(function (response) {
            return true;
        });
    };
    /**
     * Remove Team Member.
     *
     * @param {string} slug
     * @param {string} user_id
     * @return {Promise<boolean>}
     */
    TeamMemberService.prototype.removeTeamMember = function (slug, user_id) {
        return this.base.del("/teams/" + slug + "/members/" + user_id)
            .then(function (response) {
            return true;
        });
    };
    return TeamMemberService;
}());
exports.default = TeamMemberService;
//# sourceMappingURL=TeamMemberService.js.map