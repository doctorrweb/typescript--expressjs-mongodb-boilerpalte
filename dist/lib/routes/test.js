"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//lib/routes/test_routes.ts
const express_1 = require("express");
class TestRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //
        this.router.route('/test')
            .get((req, res) => {
            res.status(200).json({ message: "Get request successfully" });
        });
    }
}
const testRoute = new TestRoutes().router;
exports.default = testRoute;
