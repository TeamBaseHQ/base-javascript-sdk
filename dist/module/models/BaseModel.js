var BaseModel = /** @class */ (function () {
    function BaseModel() {
        this.id = 0;
        this.created_at = null;
        this.updated_at = null;
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
//# sourceMappingURL=BaseModel.js.map