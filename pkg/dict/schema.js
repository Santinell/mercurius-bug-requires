'use strict';

module.exports = `type Size @key(fields: "id") {
  id: Int!
  cores: Int!
  memory: Int!
}

type Region @key(fields: "id") {
  id: Int!
  city: String!
}

extend type Host @key(fields: "id") {
  id: Int! @external
  size: Int! @external
  region: Int! @external
  sizeData: Size! @requires(fields: "size")
  regionData: Region! @requires(fields: "region")
}`;
