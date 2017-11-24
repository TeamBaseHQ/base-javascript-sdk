"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel_1 = require("./BaseModel");
var User_1 = require("./User");
var Team_1 = require("./Team");
var Channel = /** @class */ (function (_super) {
    __extends(Channel, _super);
    function Channel(data) {
        var _this = this;
        if (data) {
            _this = _super.call(this, data) || this;
            _this.name = data.name;
            _this.description = data.description;
            _this.color = data.color;
            _this.type = data.type;
            _this.user_id = data.user_id;
            _this.team_id = data.team_id;
            _this.owner = new User_1.default(data.owner);
            _this.team = new Team_1.default(data.team);
            _this.slug = data.slug;
        }
        return _this;
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
    /**
     * Get Owner.
     *
     * @return {User}
     */
    Channel.prototype.getOwner = function () {
        return this.owner;
    };
    /**
     * Set Owner.
     *
     * @param {User} owner
     */
    Channel.prototype.setOwner = function (owner) {
        this.owner = owner;
    };
    /**
     * Get Team.
     *
     * @return {Team}
     */
    Channel.prototype.getTeam = function () {
        return this.team;
    };
    /**
     * Set Team.
     *
     * @param {Team} team
     */
    Channel.prototype.setTeam = function (team) {
        this.team = team;
    };
    return Channel;
}(BaseModel_1.default));
exports.default = Channel;
//# sourceMappingURL=Channel.js.map