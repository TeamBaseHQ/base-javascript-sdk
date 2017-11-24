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
var Channel_1 = require("./Channel");
var Thread = /** @class */ (function (_super) {
    __extends(Thread, _super);
    function Thread(data) {
        var _this = _super.call(this, data) || this;
        _this.subject = data.subject;
        _this.description = data.description;
        _this.user_id = data.user_id;
        _this.channel_id = data.channel_id;
        _this.slug = data.slug;
        _this.owner = new User_1.default(data.owner);
        _this.channel = new Channel_1.default(data.channel);
        return _this;
    }
    /**
     * Get Thread Owner
     *
     * @return User
     */
    Thread.prototype.getOwner = function () {
        return this.owner;
    };
    /**
     * Set Thread Owner
     *
     * @param owner
     * @return
     */
    Thread.prototype.setOwner = function (owner) {
        this.owner = owner;
        return this;
    };
    /**
     * Return Thread Subject
     *
     * @return Subject
     */
    Thread.prototype.getSubject = function () {
        return this.subject;
    };
    /**
     * Thread Subject
     *
     * @param subject
     * @return
     */
    Thread.prototype.setSubject = function (subject) {
        this.subject = subject;
        return this;
    };
    /**
     * Return Thread Description
     *
     * @return Description
     */
    Thread.prototype.getDescription = function () {
        return this.description;
    };
    /**
     * Thread Description
     *
     * @param description
     * @return
     */
    Thread.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    /**
     * Return Thread User_id
     *
     * @return User_id
     */
    Thread.prototype.getUser_id = function () {
        return this.user_id;
    };
    /**
     * Thread User_id
     *
     * @param user_id
     * @return
     */
    Thread.prototype.setUser_id = function (user_id) {
        this.user_id = user_id;
        return this;
    };
    /**
     * Return Thread Channel_id
     *
     * @return Channel_id
     */
    Thread.prototype.getChannel_id = function () {
        return this.channel_id;
    };
    /**
     * Thread Channel_id
     *
     * @param channel_id
     * @return
     */
    Thread.prototype.setChannel_id = function (channel_id) {
        this.channel_id = channel_id;
        return this;
    };
    /**
     * Return Thread Slug
     *
     * @return Slug
     */
    Thread.prototype.getSlug = function () {
        return this.slug;
    };
    /**
     * Thread Slug
     *
     * @param slug
     * @return
     */
    Thread.prototype.setSlug = function (slug) {
        this.slug = slug;
        return this;
    };
    Thread.prototype.getChannel = function () {
        return this.channel;
    };
    Thread.prototype.setChannel = function (channel) {
        this.channel = channel;
        return this;
    };
    return Thread;
}(BaseModel_1.default));
exports.default = Thread;
//# sourceMappingURL=Thread.js.map