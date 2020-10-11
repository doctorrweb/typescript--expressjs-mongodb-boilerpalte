"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//lib/routes/test_routes.ts
const express_1 = require("express");
class MismatchRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //
        this.router.route('*')
            .get((req, res) => {
            res.status(404).send({ error: true, message: "Url not found !" });
        });
    }
}
const mismatchRoute = new MismatchRoutes().router;
exports.default = mismatchRoute;
