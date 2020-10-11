"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./lib/config/app");
const dotenv = require("dotenv");
dotenv.config();
const { PORT, BASE_URL } = process.env;
app_1.default.listen(PORT, () => {
    console.log(`The drweb ExpressJS MongoDB Boilerplate server is running on : ${BASE_URL}:${PORT}`);
});
