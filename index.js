'use strict';

var enumOwnKeys = require('@fav/prop.enum-own-keys');

function enumOwnProps(obj) {
  var arr, i, n;

  /* istanbul ignore if */
  if (!Object.entries) {
    arr = enumOwnKeys(obj);
    for (i = 0, n = arr.length; i < n; i++) {
      var elm = arr[i];
      arr[i] = { key: elm, value: obj[elm] };
    }
    return arr;
  }

  arr = Object.entries(obj || {});
  for (i = 0, n = arr.length; i < n; i++) {
    var entry = arr[i];
    arr[i] = { key: entry[0], value: entry[1] };
  }
  return arr;
}

module.exports = enumOwnProps;
