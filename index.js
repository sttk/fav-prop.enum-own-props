'use strict';

function enumOwnProps(obj) {
  return Object.keys(obj || {});
}

module.exports = enumOwnProps;
