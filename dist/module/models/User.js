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
var Media_1 = require("./Media");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(data) {
        var _this = _super.call(this, data) || this;
        _this.name = data.name;
        _this.email = data.email;
        _this.is_verified = data.is_verified;
        _this.picture = new Media_1.default(data.picture);
        return _this;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
        return this;
    };
    User.prototype.isVerified = function () {
        return this.is_verified;
    };
    User.prototype.setIsVerified = function (is_verified) {
        this.is_verified = is_verified;
        return this;
    };
    User.prototype.getPicture = function () {
        return this.picture;
    };
    User.prototype.setPicture = function (pic) {
        this.picture = pic;
        return this;
    };
    return User;
}(BaseModel_1.default));
exports.default = User;
//# sourceMappingURL=User.js.map