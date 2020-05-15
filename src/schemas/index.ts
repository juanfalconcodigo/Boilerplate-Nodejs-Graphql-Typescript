import { makeExecutableSchema } from "apollo-server-express";
import { GraphQLSchema } from "graphql";
import 'graphql-import-node';
import typeDefs from './schema.graphql';
import resolvers from "../resolvers/resolver.map";

const schema:GraphQLSchema=makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;