"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const express_graphql_1 = require("express-graphql");
const schema_1 = require("@graphql-tools/schema");
const graphql_1 = require("./graphql");
dotenv_1.default.config();
const { APP_PORT = '4000', FRONT_PATH = '' } = process.env;
const app = (0, express_1.default)();
const executableSchema = (0, schema_1.makeExecutableSchema)({ typeDefs: graphql_1.typeDefs, resolvers: graphql_1.resolvers });
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    graphiql: true,
    schema: executableSchema
}));
app.use(express_1.default.static(path_1.default.join(__dirname, FRONT_PATH)));
app.get('/*', (_, response) => {
    response.sendFile(path_1.default.join(__dirname, FRONT_PATH, 'index.html'));
});
app.listen(APP_PORT, () => {
    console.log(`Server is running on http://localhost:${APP_PORT}`);
});
