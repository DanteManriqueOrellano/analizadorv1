"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_body_1 = __importDefault(require("koa-body"));
const koa2_cors_1 = __importDefault(require("koa2-cors"));
exports.default = ({ app }) => {
    app.use(koa2_cors_1.default({ credentials: true, origin: "http://localhost:3000" }));
    app.use(koa_body_1.default());
};
//# sourceMappingURL=koa.js.map