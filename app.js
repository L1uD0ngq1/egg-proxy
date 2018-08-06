'use strict';

const proxy = require('koa-proxy-b');

module.exports = app => {

  const config = app.config.proxy;
  app.use(proxy(config));
};
