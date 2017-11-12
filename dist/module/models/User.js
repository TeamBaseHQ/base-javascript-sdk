"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
        this.name = null;
        this.email = null;
        this.is_verified = false;
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
    return User;
}());
exports.default = User;
//# sourceMappingURL=User.js.map