"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const merge_1 = require("@graphql-tools/merge");
const resolvers_1 = __importDefault(require("./distance/resolvers"));
const schema_1 = __importDefault(require("./distance/schema"));
const graphql_scalars_1 = require("graphql-scalars");
exports.typeDefs = (0, merge_1.mergeTypeDefs)([schema_1.default, graphql_scalars_1.typeDefs]);
exports.resolvers = (0, merge_1.mergeResolvers)([resolvers_1.default]);
