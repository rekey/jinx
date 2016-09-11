/**
 * Created by Rekey on 2016/9/11.
 */
const Koa = require('koa');
const app = new Koa();

require('./libs/promise');

module.exports = app;