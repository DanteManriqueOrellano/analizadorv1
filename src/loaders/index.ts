import koa from 'koa'
import koaLoader from './koa';
import {connectFireBase } from './firebase';
//We have to import at least all the events once so they can be triggered

export default async ({koaApp} ) => {
    connectFireBase();
    console.info('✌️ DB loaded and connected!');
    console.log(`en el archivo index de loader ${koaApp}`);
    await koaLoader({ app: koaApp });
    console.info('✌️ Express loaded');
}

