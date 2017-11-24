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
var User_1 = require("./User");
var BaseModel_1 = require("./BaseModel");
var Thread_1 = require("./Thread");
var Media_1 = require("./Media");
var Message = /** @class */ (function (_super) {
    __extends(Message, _super);
    function Message(data) {
        var _this = _super.call(this, data) || this;
        _this.content = data.content;
        _this.type = data.type;
        _this.thread_id = data.thread_id;
        _this.sender_id = data.sender_id;
        _this.sender_type = data.sender_type;
        _this.slug = data.slug;
        _this.sender = new User_1.default(data.sender);
        _this.thread = new Thread_1.default(data.thread);
        if (data.attachments && data.attachments.length > 0) {
            _this.attachments = data.attachments.map(function (attachment) {
                return new Media_1.default(attachment);
            });
        }
        return _this;
    }
    /**
     * Get Message Sender
     *
     * @return {User} User
     */
    Message.prototype.getSender = function () {
        return this.sender;
    };
    /**
     * Set Message Sender
     *
     * @param {User} sender
     * @return
     * @return {Message}
     */
    Message.prototype.setSender = function (sender) {
        this.sender = sender;
        return this;
    };
    /**
     * Message Content
     *
     * @return {string} Content
     */
    Message.prototype.getContent = function () {
        return this.content;
    };
    /**
     * Set Message Content
     *
     * @param {string} content
     * @return
     * @return {Message}
     */
    Message.prototype.setContent = function (content) {
        this.content = content;
        return this;
    };
    /**
     * Message Type
     *
     * @return {string} Type
     */
    Message.prototype.getType = function () {
        return this.type;
    };
    /**
     * Set Message Type
     *
     * @param {string} type
     * @return
     * @return {Message}
     */
    Message.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    /**
     * Message Thread_id
     *
     * @return {string} Thread_id
     */
    Message.prototype.getThread_id = function () {
        return this.thread_id;
    };
    /**
     * Set Message Thread_id
     *
     * @param {string} thread_id
     * @return
     * @return {Message}
     */
    Message.prototype.setThread_id = function (thread_id) {
        this.thread_id = thread_id;
        return this;
    };
    /**
     * Message Sender_id
     *
     * @return {string} Sender_id
     */
    Message.prototype.getSender_id = function () {
        return this.sender_id;
    };
    /**
     * Set Message Sender_id
     *
     * @param {string} sender_id
     * @return
     * @return {Message}
     */
    Message.prototype.setSender_id = function (sender_id) {
        this.sender_id = sender_id;
        return this;
    };
    /**
     * Message Sender_type
     *
     * @return {string} Sender_type
     */
    Message.prototype.getSender_type = function () {
        return this.sender_type;
    };
    /**
     * Set Message Sender_type
     *
     * @param {string} sender_type
     * @return
     * @return {Message}
     */
    Message.prototype.setSender_type = function (sender_type) {
        this.sender_type = sender_type;
        return this;
    };
    /**
     * Message Slug
     *
     * @return {string} Slug
     */
    Message.prototype.getSlug = function () {
        return this.slug;
    };
    /**
     * Set Message Slug
     *
     * @param {string} slug
     * @return
     * @return {Message}
     */
    Message.prototype.setSlug = function (slug) {
        this.slug = slug;
        return this;
    };
    Message.prototype.getThread = function () {
        return this.thread;
    };
    Message.prototype.setThread = function (thread) {
        this.thread = thread;
        return this;
    };
    Message.prototype.getAttachments = function () {
        return this.attachments;
    };
    Message.prototype.setAttachments = function (attachments) {
        this.attachments = attachments;
        return this;
    };
    return Message;
}(BaseModel_1.default));
exports.default = Message;
//# sourceMappingURL=Message.js.map