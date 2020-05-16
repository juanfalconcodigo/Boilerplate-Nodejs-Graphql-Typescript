import { IResolvers } from "apollo-server-express";
import { SP_USER_LIST } from '../environments/environment';

const query: IResolvers = {
    Query: {
        async welcome(_: void, __: any, { connect }): Promise<string> {
            return "Welcome";
        },
        async users(_: void, __: any, { connect }): Promise<string> {
            const connection = await connect();
            const users = await connection.query(SP_USER_LIST);
            return users[0][0];
        }
    }
}

export default query;