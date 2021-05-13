import 'reflect-metadata'; // We need this in order to use @Decorators
import Koa from "koa";
import config from './config';
import koabody from "koa-body";
import Router from "koa-router";
import cors from 'koa2-cors'
import { ApolloServer } from "apollo-server-koa";
import { schemas } from "./api/graphql/schema"
import { connectFireBase } from './loaders/firebase';


//class Server {
  //  private app: Koa;
    //constructor() {
      //  this.app = new Koa();
        /**
         * A little hack here
         * Async/Await cannot used in Class methods
         * So instead Promises are used here
        // * @method Preconfig
         **/
        //new Promise(resolve => {
            /**
             * Import/Export can only be used in 'top-level code'
             * So using good old require statements.
             **/
          //  resolve(require('./loaders').default({ koaApp: this.app }));
        //}).then(() => {
          //  this.startServer(this.app);
        //});
   // }

    //private startServer(app: Koa) {

      //  app.listen(config.port, () => {
            
        //    console.info(`
         // ################################################
          //🛡️  Server listening on port: ${config.port} 🛡️
         // 🌐 http://localhost:3000
          //################################################
        //`);
        //})
    //}
//}
//new Server();

const port = 3000
const main = async () => {
    connectFireBase()
    const app = new Koa();
    const router = new Router();
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
    app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

    apolloServer.applyMiddleware({ app, path: '/joder', cors: true });

    app.use(koabody());

    router.get("/ping", async ctx => {
        ctx.body = "pong";
    });

    app.use(router.routes());

    

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
};

export default main;
main()




