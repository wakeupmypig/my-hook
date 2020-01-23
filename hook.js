const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const bodyparser = require('koa-bodyparser')
const router = new Router();
const crypto = require('crypto');
app.use(bodyparser());
function s(body) {
    return `sha1=`+ crypto.createHmac('sha1','').update(body).digest('hex');
}
router.post('/webhook',async function (ctx) {
    let body = await ctx.request.body;
    let event = ctx.get('x-github-event');
    let signature = ctx.get('x-hub-signature');
    let newSign = s(body);
    console.log(event,signature,newSign);
    ctx.body = {ok:true}
});
app.use(router.routes());
app.listen(4000,function () {
    console.log('server start 4000');
});