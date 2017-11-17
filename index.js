'use strict';

function enumOwnProps(obj) {
  // Cause TypeError on Node.js v0.12 or earlier.
  if (typeof obj !== 'object') {
    return [];
  }

  return Object.keys(obj || {});
}

module.exports = enumOwnProps;
