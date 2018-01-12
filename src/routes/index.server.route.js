"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_server_controller_1 = require("../controllers/index.server.controller");
var IndexRoute = /** @class */ (function () {
    function IndexRoute(app) {
        app.route('/')
            .get(index_server_controller_1.default.read);
    }
    return IndexRoute;
}());
exports.default = IndexRoute;
//# sourceMappingURL=index.server.route.js.map