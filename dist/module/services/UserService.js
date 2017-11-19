"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../models/User");
var UserService = /** @class */ (function () {
    function UserService(base) {
        this.base = base;
        //
    }
    UserService.makeUser = function (data) {
        return (new User_1.default()).setName(data.name).setEmail(data.email).setIsVerified(data.is_verified);
    };
    UserService.makeUserFromResponse = function (response) {
        var data = response.data ? response.data.data : {};
        return (new User_1.default()).setName(data.name).setEmail(data.email).setIsVerified(data.is_verified);
    };
    UserService.prototype.getUser = function (id) {
        return this.base.get("/users/" + id).then(function (response) {
            return UserService.makeUserFromResponse(response);
        });
    };
    UserService.prototype.getCurrentUser = function () {
        return this.getUser('me');
    };
    UserService.prototype.createUser = function (name, email, password) {
        return this.base.post('/users', { name: name, email: email, password: password }).then(function (response) {
            return UserService.makeUserFromResponse(response);
        });
    };
    UserService.prototype.updateUser = function (name, email, password) {
        if (name === void 0) { name = ''; }
        if (email === void 0) { email = ''; }
        if (password === void 0) { password = ''; }
        return this.base.patch('/users/me', { name: name, email: email, password: password }).then(function (response) {
            return UserService.makeUserFromResponse(response);
        });
    };
    UserService.prototype.uploadProfilePicture = function (picture) {
        return this.base.post('/users/picture', { file: picture }).then(function (response) {
            return UserService.makeUserFromResponse(response);
        });
    };
    return UserService;
}());
exports.default = UserService;
//# sourceMappingURL=UserService.js.map