"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Base_1 = require("./Base");
var BaseApp_1 = require("./BaseApp");
describe('Base JavaScript SDK Tests', function () {
    it('Base API status should be 200 OK', function () {
        var base;
        base = new Base_1.default(new BaseApp_1.default('1', 'abcd', 'https://baseapp-backend.kunalvarma.in/api'));
        base.get('/').then(function (response) {
            expect(response.status).toBe(200);
        });
    });
});
//# sourceMappingURL=index.spec.js.map