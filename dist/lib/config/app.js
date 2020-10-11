"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// import * as dotenv from 'dotenv'
const index_1 = require("../routes/index");
class App {
    // private appRouter: AppRouter = new AppRouter().router
    constructor() {
        this.app = express();
        this.config();
    }
    config() {
        //
        this.app.use(morgan('tiny'));
        // support application/json type post data
        this.app.use(bodyParser.json({ type: '*/*', limit: '50mb' }));
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
        //
        this.app.use('/api', index_1.default);
    }
}
exports.default = new App().app;
