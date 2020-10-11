"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//lib/routes/test_routes.ts
const express_1 = require("express");
const test_1 = require("./test");
const mismatch_1 = require("./mismatch");
class AppRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //
        this.router.use(test_1.default);
        this.router.use(mismatch_1.default);
    }
}
// const appRouter = new AppRouter()
const appRouter = new AppRouter().router;
exports.default = appRouter;
