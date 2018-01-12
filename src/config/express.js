"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var config_1 = require("./config");
var cookieParser = require("cookie-parser");
var express = require("express");
var logger = require("morgan");
var path = require("path");
function default_1(db) {
    var app = express();
    for (var _i = 0, _a = config_1.default.globFiles(config_1.default.models); _i < _a.length; _i++) {
        var model = _a[_i];
        require(path.resolve(model));
    }
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });
    for (var _b = 0, _c = config_1.default.globFiles(config_1.default.routes); _b < _c.length; _b++) {
        var route = _c[_b];
        require(path.resolve(route)).default(app);
    }
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        next(err);
    });
    app.use(function (err, req, res, next) {
        res.status(err.status || 500).render('error', {
            message: err.message,
            error: {}
        });
    });
    if (app.get('env') === 'development') {
        app.use(function (err, req, res, next) {
            res.status(500).render('error', {
                message: err.message,
                error: err
            });
        });
    }
    return app;
}
exports.default = default_1;
;
//# sourceMappingURL=express.js.map