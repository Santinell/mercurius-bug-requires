'use strict';

const Fastify = require('fastify');
const mercurius = require('mercurius');
const cors = require('fastify-cors');
const app = Fastify({ trustProxy: true });

async function startGateway () {

  app.register(cors, {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true
  });
  app.register(mercurius, {
    jit: 1,
    path: '/',
    queryDepth: 7,
    ide: 'playground',
    playgroundSettings: {
      'editor.reuseHeaders': true,
      'editor.theme': 'dark',
      'schema.polling.enable': true,
      'schema.polling.interval': 3000
    },
    errorHandler: true,
    gateway: {
      pollingInterval: 3000,
      services: [
        { name: 'host', url: process.env.MAIN_API || 'http://localhost:3001/' },
        { name: 'dict', url: process.env.DICT_API || 'http://localhost:3002/' }
      ]
    }
  });

  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`🚀 Gateway server ready at http://localhost:${port}`);
}

module.exports = { start: startGateway };
