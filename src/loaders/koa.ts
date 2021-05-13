import koa from 'koa'
import koabody from "koa-body";
import cors from 'koa2-cors'
import config from '../config';
import buildApollo from '../api'
import router from "../api";// cuado el archivo de la carpeta lleva como nombre index, ya no es necesario apuntar al nombre del archivo
/*
 * este archivo es parte de loaders, 
 */
export default ({ app }: { app: koa }) => {
  
    app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

    //ACA DEBE IR EL SERVIDOR APOLLO

    app.use(koabody());

    // Load API routes
    

};