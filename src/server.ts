import express, { Application } from 'express';
import cors from 'cors';
import compression from 'compression';
import { PORT } from './environments/environment';
import { ApolloServer } from 'apollo-server-express';
import schema from './schemas';
import connect from './environments/database';


/* 
Query=>get
Mutation=>post put delete
Subscription=> real time
 */


class Server {

    private app: Application;
    private port: number;
    private server: ApolloServer;

    constructor() {
        this.app = express();
        this.port = PORT;
        this.middlewares();
        this.server = new ApolloServer({
            schema,
            introspection: true,
            context:({req,connection})=>{
                return {connect}
            }
        });
        this.server.applyMiddleware({ app: this.app });

    }

    private middlewares() {
        this.app.use(cors({ origin: true, credentials: true }));
        this.app.use(compression());
    }

    listen() {
        this.app.listen(this.port, (err: any) => {
            if (err) throw new Error(err);
            console.log(`http://localhost:${this.port}${this.server.graphqlPath}`);
        });
    }

}

export default Server;