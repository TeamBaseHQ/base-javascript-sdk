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
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media(data) {
        var _this = _super.call(this, data) || this;
        _this.collection_name = data.collection_name;
        _this.name = data.name;
        _this.file_name = data.file_name;
        _this.mime_type = data.mime_type;
        _this.size = data.size;
        _this.manipulations = data.manipulations;
        _this.custom_properties = data.custom_properties;
        _this.url = data.url;
        return _this;
    }
    Media.prototype.getCollection_name = function () {
        return this.collection_name;
    };
    Media.prototype.setCollection_name = function (value) {
        this.collection_name = value;
    };
    Media.prototype.getName = function () {
        return this.name;
    };
    Media.prototype.setName = function (value) {
        this.name = value;
    };
    Media.prototype.getFile_name = function () {
        return this.file_name;
    };
    Media.prototype.setFile_name = function (value) {
        this.file_name = value;
    };
    Media.prototype.getMime_type = function () {
        return this.mime_type;
    };
    Media.prototype.setMime_type = function (value) {
        this.mime_type = value;
    };
    Media.prototype.getSize = function () {
        return this.size;
    };
    Media.prototype.setSize = function (value) {
        this.size = value;
    };
    Media.prototype.getManipulations = function () {
        return this.manipulations;
    };
    Media.prototype.setManipulations = function (value) {
        this.manipulations = value;
    };
    Media.prototype.getCustom_properties = function () {
        return this.custom_properties;
    };
    Media.prototype.setCustom_properties = function (value) {
        this.custom_properties = value;
    };
    Media.prototype.getUrl = function (size) {
        if (size) {
            return this.url[size];
        }
        return this.url;
    };
    Media.prototype.setUrl = function (value) {
        this.url = value;
    };
    return Media;
}(BaseModel_1.default));
exports.default = Media;
//# sourceMappingURL=Media.js.map