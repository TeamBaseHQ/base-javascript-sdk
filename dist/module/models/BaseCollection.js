"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseCollection = /** @class */ (function () {
    function BaseCollection(responseData, type) {
        var data = responseData.data ? responseData.data : {};
        var collectionData = data.map(function (itemData) {
            return BaseCollection.factory(type, itemData);
        });
        this.setData(collectionData)
            .setLinks(responseData.links)
            .setMeta(responseData.meta);
    }
    /**
     * Set data.
     *
     * @param {T[]} data
     * @return {BaseCollection<T>}
     */
    BaseCollection.prototype.setData = function (data) {
        this.data = data;
        return this;
    };
    /**
     * Get data.
     * @return {T[]}
     */
    BaseCollection.prototype.getData = function () {
        return this.data;
    };
    /**
     * Set links.
     *
     * @param {Object} links
     * @return {BaseCollection<T>}
     */
    BaseCollection.prototype.setLinks = function (links) {
        this.links = links;
        return this;
    };
    /**
     * Get links.
     * @return {Object}
     */
    BaseCollection.prototype.getLinks = function () {
        return this.links;
    };
    /**
     * Set meta.
     *
     * @param {Object} meta
     * @return {BaseCollection<T>}
     */
    BaseCollection.prototype.setMeta = function (meta) {
        this.meta = meta;
        return this;
    };
    /**
     * Get meta.
     * @return {Object}
     */
    BaseCollection.prototype.getMeta = function () {
        return this.meta;
    };
    /**
     * Model Factory.
     *
     * @param type
     * @param data
     * @return {T}
     */
    BaseCollection.factory = function (type, data) {
        return new type(data);
    };
    return BaseCollection;
}());
exports.default = BaseCollection;
//# sourceMappingURL=BaseCollection.js.map