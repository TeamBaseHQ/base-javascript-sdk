"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Team_1 = require("../models/Team");
var BaseCollection_1 = require("../models/BaseCollection");
var TeamService = /** @class */ (function () {
    function TeamService(base) {
        this.base = base;
        //
    }
    TeamService.makeTeamFromResponse = function (response) {
        var data = response.data ? response.data.data : {};
        return TeamService.makeTeam(data);
    };
    TeamService.makeTeam = function (data) {
        return new Team_1.default(data);
    };
    TeamService.makeCollectionFromResponse = function (response) {
        var responseData = response.data;
        return new BaseCollection_1.default(responseData, Team_1.default);
    };
    /**
     * Get Team.
     *
     * @param {string} slug
     * @return {Team}
     */
    TeamService.prototype.getTeam = function (slug) {
        return this.base.get("/teams/" + slug).then(function (response) {
            return TeamService.makeTeamFromResponse(response);
        });
    };
    /**
     * Create Team.
     *
     * @param {string} name
     * @param {string} description
     * @return {Team}
     */
    TeamService.prototype.createTeam = function (name, description) {
        return this.base.post("/teams", { name: name, description: description }).then(function (response) {
            return TeamService.makeTeamFromResponse(response);
        });
    };
    /**
     * Update Team.
     *
     * @param {string} slug
     * @param {string} name
     * @param {string} description
     * @return {Team}
     */
    TeamService.prototype.updateTeam = function (slug, name, description) {
        return this.base.patch("/teams/" + slug, { name: name, description: description }).then(function (response) {
            return TeamService.makeTeamFromResponse(response);
        });
    };
    /**
     * List of Teams. Paginated.
     *
     * @param {string} page
     * @param {string} limit
     * @return {Promise<BaseCollection<Team>>}
     */
    TeamService.prototype.getAllTeams = function (page, limit) {
        if (page === void 0) { page = '0'; }
        return this.base.get("/teams", { page: page, limit: limit }).then(function (response) {
            return TeamService.makeCollectionFromResponse(response);
        });
    };
    /**
     * Delete Team.
     *
     * @param {string} slug
     * @return {Team}
     */
    TeamService.prototype.deleteTeam = function (slug) {
        return this.base.del("/teams/" + slug).then(function (response) {
            return true;
        });
    };
    return TeamService;
}());
exports.default = TeamService;
//# sourceMappingURL=TeamService.js.map