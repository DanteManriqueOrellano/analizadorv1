"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("./koa"));
const firebase_1 = require("./firebase");
exports.default = async ({ koaApp }) => {
    firebase_1.connectFireBase();
    console.info('✌️ DB loaded and connected!');
    console.log(`en el archivo index de loader ${koaApp}`);
    await koa_1.default({ app: koaApp });
    console.info('✌️ Express loaded');
};
//# sourceMappingURL=index.js.map