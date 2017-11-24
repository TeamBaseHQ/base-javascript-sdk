"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel = /** @class */ (function () {
    function BaseModel(data) {
        if (data) {
            this.id = data.id;
            this.created_at = data.created_at;
            this.updated_at = data.updated_at;
        }
    }
    BaseModel.prototype.getId = function () {
        return this.id;
    };
    BaseModel.prototype.setId = function (id) {
        this.id = id;
        return this;
    };
    BaseModel.prototype.getCreated_at = function () {
        return this.created_at;
    };
    BaseModel.prototype.setCreated_at = function (created_at) {
        this.created_at = created_at;
        return this;
    };
    BaseModel.prototype.getUpdated_at = function () {
        return this.updated_at;
    };
    BaseModel.prototype.setUpdated_at = function (updated_at) {
        this.updated_at = updated_at;
        return this;
    };
    return BaseModel;
}());
exports.default = BaseModel;
//# sourceMappingURL=BaseModel.js.map