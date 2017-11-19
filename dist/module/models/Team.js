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
var Team = /** @class */ (function (_super) {
    __extends(Team, _super);
    function Team(data) {
        var _this = _super.call(this, data) || this;
        _this.name = data.name;
        _this.description = data.description;
        _this.invitation_code = data.invitation_code;
        _this.user_id = data.user_id;
        _this.owner = data.owner;
        _this.slug = data.slug;
        return _this;
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
     * Get Owner.
     *
     * @return {User}
     */
    Team.prototype.getOwner = function () {
        return this.owner;
    };
    /**
     * Set Owner.
     *
     * @param {User} owner
     */
    Team.prototype.setOwner = function (owner) {
        this.owner = owner;
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
}(BaseModel_1.default));
exports.default = Team;
//# sourceMappingURL=Team.js.map