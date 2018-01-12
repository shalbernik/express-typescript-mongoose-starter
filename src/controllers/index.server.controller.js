"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController() {
    }
    IndexController.read = function (req, res, next) {
        res.json({ message: 'Hello' });
    };
    return IndexController;
}());
exports.default = IndexController;
//# sourceMappingURL=index.server.controller.js.map