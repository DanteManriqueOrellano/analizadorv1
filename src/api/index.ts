import Router from "koa-router";
import { buildSchema } from "type-graphql";
import Container from "typedi";
import buildApollo from './graphql'
import koa from "koa"
//INDICE DEL API
/*
 * EN ESTE ARCHIVO SE CONSTRUIRA EL SERVIDOR APOLLO
 */
// guaranteed to get dependencies

export default async (_app: koa) => {
	
};