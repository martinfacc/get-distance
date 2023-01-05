"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const log4js_1 = __importDefault(require("log4js"));
const { LOG_LEVEL = 'all', LOG_FILENAME = 'logs.log' } = process.env;
log4js_1.default.configure({
    appenders: { cheese: { type: 'file', filename: LOG_FILENAME } },
    categories: { default: { appenders: ['cheese'], level: LOG_LEVEL } }
});
const logger = log4js_1.default.getLogger('logger');
exports.default = logger;
