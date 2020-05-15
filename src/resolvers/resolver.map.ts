import { IResolvers } from "apollo-server-express";
import query from "./query";


const resolvers:IResolvers={
    ...query
}

export default resolvers;