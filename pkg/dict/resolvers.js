'use strict';

const regions = [{
  id: 1,
  city: 'London'
}, {
  id: 2,
  city: 'Paris'
}];

const sizes = [{
  id: 1,
  cpus: 1,
  memory: 1
}, {
  id: 2,
  cpus: 1,
  memory: 2
}, {
  id: 3,
  cpus: 2,
  memory: 4
}];

module.exports = {
  Host: {
    regionData (host, args) {
      return host.region && regions.find(r => r.id === host.region);
    },
    sizeData (host, args) {
      return host.size && sizes.find(s => s.id === host.size);
    }
  }
};
