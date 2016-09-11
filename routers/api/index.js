/**
 * Created by Rekey on 2016/9/11.
 */
const co = require('co');
const app = require('../../app.js');
const KoaRouter = require('koa-router');
const router = new KoaRouter({
  prefix: '/api'
});

router.get('/', co.wrap(function *(ctx, next) {
  yield next();
  ctx.body = {
    errno: 0,
    data: ctx
  };
}));

router.get('/china-list.conf', co.wrap(function *(ctx, next) {
  const dns = ctx.query.dns;
  const chinaList = require('../../services/china-list.js');
  yield next();
  ctx.body = yield chinaList.get(dns);
}));

app.use(router.routes()).use(router.allowedMethods());