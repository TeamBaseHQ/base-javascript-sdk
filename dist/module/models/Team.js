"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Team = /** @class */ (function () {
    function Team() {
        this.name = null;
        this.description = null;
        this.invitation_code = null;
        this.user_id = null;
        this.slug = null;
    }
    /**
     * Return User Name
     *
     * @return {string} Name
     */
    Team.prototype.getName = function () {
        return this.name;
    };
    /**
     * User Name
     *
     * @param {string} name
     * @return
     * @return {Team}
     */
    Team.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    /**
     * Return User Description
     *
     * @return {string} Description
     */
    Team.prototype.getDescription = function () {
        return this.description;
    };
    /**
     * User Description
     *
     * @param {string} description
     * @return
     * @return {Team}
     */
    Team.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    /**
     * Return User Invitation_code
     *
     * @return {string} Invitation_code
     */
    Team.prototype.getInvitation_code = function () {
        return this.invitation_code;
    };
    /**
     * User Invitation_code
     *
     * @param {string} invitation_code
     * @return
     * @return {Team}
     */
    Team.prototype.setInvitation_code = function (invitation_code) {
        this.invitation_code = invitation_code;
        return this;
    };
    /**
     * Return User User_id
     *
     * @return {string} User_id
     */
    Team.prototype.getUser_id = function () {
        return this.user_id;
    };
    /**
     * User User_id
     *
     * @param {string} user_id
     * @return
     * @return {Team}
     */
    Team.prototype.setUser_id = function (user_id) {
        this.user_id = user_id;
        return this;
    };
    /**
     * Return User Slug
     *
     * @return {string} Slug
     */
    Team.prototype.getSlug = function () {
        return this.slug;
    };
    /**
     * User Slug
     *
     * @param {string} slug
     * @return
     * @return {Team}
     */
    Team.prototype.setSlug = function (slug) {
        this.slug = slug;
        return this;
    };
    return Team;
}());
exports.default = Team;
//# sourceMappingURL=Team.js.map