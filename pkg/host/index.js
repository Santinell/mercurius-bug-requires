'use strict';

const appServer = require('./app');
const { schema, resolvers } = require('./host');

process.on('unhandledRejection', err =>
  console.error('Unhandled promise rejection:\n', err)
);

async function bootstrap () {
  await appServer.start(schema, resolvers);
}

bootstrap();
