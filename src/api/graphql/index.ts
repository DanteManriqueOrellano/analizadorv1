import Router from 'koa-router';
import Koa from "koa";
import { ClassType, NonEmptyArray } from "type-graphql";
import { Service } from "typedi";
import { TicTacToe } from './resolvers/moduleTicTac/resolver/tictacResolver';
import { ApolloServer } from "apollo-server-koa";

import { schemas } from "./schema"

/*
 * INDICE DEL GRAPHQL
 * EN ESTE ARCHIVO SE CONSTRUIRÁ EL SERVIDOR APOLLOGRAPHQL
 */



export default async () => {
    const apolloServer = new ApolloServer({
        introspection: true,
        schema: await schemas,
        playground: true,
        context: (req) => {
            const { session } = req.ctx;

            // return an object with whatever properties you 
            // need to be accessible inside resolvers as `context`
            return {
                userSession: session
            }
        }
    });

    return apolloServer

}
    

