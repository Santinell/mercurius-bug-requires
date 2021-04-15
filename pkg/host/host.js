'use strict';

const hosts = [{
  id: 1,
  name: 'test',
  region: 1,
  size: 2
}, {
  id: 1,
  name: 'test2',
  region: 2,
  size: 3
}];

const schema = `extend type Query {
  hosts: [Host]
}

type Host @key(fields: "id") {
  id: Int!
  name: String!
  region: Int!
  size: Int!
}`;

const resolvers = {
  Query: {
    hosts (parent, args, context, info) {
      return hosts;
    }
  }
};

module.exports = { resolvers, schema };
