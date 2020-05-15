import { IResolvers } from "apollo-server-express";

const query:IResolvers={
    Query:{
        welcome(_:void,__:any,{connect}):string{
            return "Welcome"
        }
    }
}

export default query;