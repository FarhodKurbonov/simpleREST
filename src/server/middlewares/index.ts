import * as compose from 'koa-compose';  
import * as convert from 'koa-convert';
import * as logger from 'koa-logger';
import * as cors from 'koa-cors';
import * as bodyParser from 'koa-bodyparser';
import delay from './delay'
export default function middlewares() {
  return compose([
    bodyParser(),
    delay({ms: 5000}), // ()=>{}
    logger(),
    convert(cors()),
  ]);
}