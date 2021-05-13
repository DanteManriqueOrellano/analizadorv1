"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_koa_1 = require("apollo-server-koa");
const schema_1 = require("./schema");
exports.default = async () => {
    const apolloServer = new apollo_server_koa_1.ApolloServer({
        introspection: true,
        schema: await schema_1.schemas,
        playground: true,
        context: (req) => {
            const { session } = req.ctx;
            return {
                userSession: session
            };
        }
    });
    return apolloServer;
};
//# sourceMappingURL=index.js.map