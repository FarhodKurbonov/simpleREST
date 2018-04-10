import {Middleware} from "koa"
import middlewares from ".";
function sleep(ms: number) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

export default (options: { ms: number }): Middleware => {
    return async (ctx, next) => {
        const delay = Number.parseInt(ctx.query.sleep) || options.ms;
        await sleep(delay)
        await next();
    }
}