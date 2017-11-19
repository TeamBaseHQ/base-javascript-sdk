"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Channel = /** @class */ (function () {
    function Channel() {
        this.name = null;
        this.description = null;
        this.color = null;
        this.type = null;
        this.user_id = null;
        this.team_id = null;
        this.slug = null;
    }
    /**
     * Return Channel Name
     *
     * @return {string} Name
     */
    Channel.prototype.getName = function () {
        return this.name;
    };
    /**
     * Set Channel Name
     *
     * @param {string} name
     * @return {Channel}
     */
    Channel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    /**
     * Return Channel Description
     *
     * @return {string} Description
     */
    Channel.prototype.getDescription = function () {
        return this.description;
    };
    /**
     * Set Channel Description
     *
     * @param {string} description
     * @return {Channel}
     */
    Channel.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    /**
     * Return Channel Color
     *
     * @return {string} Color
     */
    Channel.prototype.getColor = function () {
        return this.color;
    };
    /**
     * Set Channel Color
     *
     * @param {string} color
     * @return {Channel}
     */
    Channel.prototype.setColor = function (color) {
        this.color = color;
        return this;
    };
    /**
     * Return Channel Type
     *
     * @return {string} Type
     */
    Channel.prototype.getType = function () {
        return this.type;
    };
    /**
     * Set Channel Type
     *
     * @param {string} type
     * @return {Channel}
     */
    Channel.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    /**
     * Return Channel User_id
     *
     * @return {number} User_id
     */
    Channel.prototype.getUser_id = function () {
        return this.user_id;
    };
    /**
     * Set Channel User_id
     *
     * @param {number} user_id
     */
    Channel.prototype.setUser_id = function (user_id) {
        this.user_id = user_id;
        return this;
    };
    /**
     * Return Channel Team_id
     *
     * @return {number} Team_id
     */
    Channel.prototype.getTeam_id = function () {
        return this.team_id;
    };
    /**
     * Set Channel Team_id
     *
     * @param {number} team_id
     */
    Channel.prototype.setTeam_id = function (team_id) {
        this.team_id = team_id;
        return this;
    };
    /**
     * Return Channel Slug
     *
     * @return {string} Slug
     */
    Channel.prototype.getSlug = function () {
        return this.slug;
    };
    /**
     * Set Channel Slug
     *
     * @param {string} slug
     * @return {Channel}
     */
    Channel.prototype.setSlug = function (slug) {
        this.slug = slug;
        return this;
    };
    return Channel;
}());
exports.default = Channel;
//# sourceMappingURL=Channel.js.map