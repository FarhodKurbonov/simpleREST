import * as Koa from 'koa';
var bodyParser = require('koa-bodyparser');
import { connectDatabase } from './db';

import { config } from './config';
import { logger } from './logging';
import { routes } from './routes';

const app = new Koa();
app.use(bodyParser());
app.use(logger);
app.use(routes);
(async ()=> {
    try {
        const dbUrl = config.dbUrl;
        const info = await connectDatabase(dbUrl);
        console.info(config.logColor ? '\x1b[32m%s\x1b[0m' : '%s', `Connected to ${config.dbUrl}`);

    } catch (error) {
        console.error(config.logColor ? '\x1b[31m%s\x1b[0m' : '%s', error.toString());
    } 

    try { 
        app.listen(config.port);
        console.info(config.logColor ? '\ x1b[32m%s\x1b[0m' : '%s', `Listening to http://localhost:${config.port}`);

    } catch (error) {
        console.error(config.logColor ? '\x1b[31m%s\x1b[0m' : '%s', error);
    }

})() 

