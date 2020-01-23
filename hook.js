const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
router.post('/webhook',function (ctx) {
    console.log('post hook')
    ctx.body = {ok:true}
});
app.use(router.routes());
app.listen(4000,function () {
    console.log('server start 4000');
});