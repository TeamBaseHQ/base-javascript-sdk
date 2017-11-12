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
    UserService.prototype.getUser = function (id) {
        return this.base.get("/users/" + id).then(function (response) {
            var data = response.data.data;
            return UserService.makeUser(data);
        });
    };
    return UserService;
}());
exports.default = UserService;
//# sourceMappingURL=UserService.js.map