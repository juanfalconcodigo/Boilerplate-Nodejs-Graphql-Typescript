import { makeExecutableSchema } from "apollo-server-express";
import { GraphQLSchema } from "graphql";
import {mergeTypes,fileLoader}  from 'merge-graphql-schemas';
import resolvers from "../resolvers/resolver.map";
import path from 'path';

const typeDefs=mergeTypes(fileLoader(path.join(`${__dirname}/**/*.graphql`)),{all:true});


const schema:GraphQLSchema=makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;