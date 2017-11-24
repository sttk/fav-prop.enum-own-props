(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.fav||(g.fav = {}));g=(g.prop||(g.prop = {}));g.enumOwnProps = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"@fav/prop.enum-own-keys":2}],2:[function(require,module,exports){
'use strict';

function enumOwnKeys(obj) {
  switch (typeof obj) {
    case 'object': {
      return Object.keys(obj || {});
    }
    case 'function': {
      return Object.keys(obj);
    }

    // Cause TypeError on Node.js v0.12 or earlier.
    case 'string': {
      return Object.keys(new String(obj));
    }
    default: {
      return [];
    }
  }
}

module.exports = enumOwnKeys;

},{}]},{},[1])(1)
});