'use strict';

var chai = require('chai');
var expect = chai.expect;

var fav = {}; fav.prop = {}; fav.prop.enumOwnProps = require('..');

var enumOwnProps = fav.prop.enumOwnProps;

describe('fav.prop.enumOwnProps', function() {

  it('Should get all props when the argument is a plain object', function() {
    expect(enumOwnProps({})).to.deep.equal([]);
    expect(enumOwnProps({ a: 1, b: true, c: 'C' }).sort()).to.deep.equal([
      { key: 'a', value: 1 },
      { key: 'b', value: true },
      { key: 'c', value: 'C' }
    ]);
  });

  it('Should not get properties of prototype', function() {
    function Fn0() {}
    Fn0.prototype.a = 1;
    expect(enumOwnProps(new Fn0())).to.deep.equal([]);
    function Fn1() {
      this.b = true;
      this.c = 'C';
    }
    Fn1.prototype = new Fn0();
    Fn1.prototype.d = 'D';
    expect(enumOwnProps(new Fn1()).sort()).to.deep.equal([
      { key: 'b', value: true },
      { key: 'c', value: 'C' },
    ]);
  });

  it('Should get only enumerable props', function() {
    var obj = {};
    Object.defineProperties(obj, {
      a: { enumerable: true, value: 1 },
      b: { value: true },
      c: { value: 'C' },
    });
    expect(enumOwnProps(obj)).to.deep.equal([{ key: 'a', value: 1 }]);
  });

  it('Should return an empty array when the argument is nullish', function() {
    expect(enumOwnProps(undefined)).to.deep.equal([]);
    expect(enumOwnProps(null)).to.deep.equal([]);
  });

  it('Should return an empty array when the argument is primitive type',
  function() {
    expect(enumOwnProps(true)).to.deep.equal([]);
    expect(enumOwnProps(false)).to.deep.equal([]);
    expect(enumOwnProps(0)).to.deep.equal([]);
    expect(enumOwnProps(123)).to.deep.equal([]);
  });

  it('Should return an array having index strings as keys when the argument' +
  '\n\tis a string', function() {
    expect(enumOwnProps('')).to.deep.equal([]);
    expect(enumOwnProps('abc')).to.deep.equal([
      { key: '0', value: 'a' },
      { key: '1', value: 'b' },
      { key: '2', value: 'c' },
    ]);

    var s = 'abc';
    try {
      s.aaa = 'AAA';
    } catch (e) {
      // Throw TypeError on Node.js version 0.11 or later.
      //console.error('\t', e.message);
    }
    expect(enumOwnProps(s)).to.deep.equal([
      { key: '0', value: 'a' },
      { key: '1', value: 'b' },
      { key: '2', value: 'c' },
    ]);

    try {
      Object.defineProperty(s, 'bbb', { value: 'BBB' });
    } catch (e) {
      // Throw TypeError on Node.js version 0.11 or later.
      //console.error('\t', e.message);
    }
    expect(enumOwnProps(s)).to.deep.equal([
      { key: '0', value: 'a' },
      { key: '1', value: 'b' },
      { key: '2', value: 'c' },
    ]);
  });

  it('Should return an array of index strings as keys when the argument is' +
  '\n\ta String object', function() {
    var s = new String('abc');
    expect(enumOwnProps(s).sort()).to.deep.equal([
      { key: '0', value: 'a' },
      { key: '1', value: 'b' },
      { key: '2', value: 'c' },
    ]);

    s.aaa = 'AAA';
    expect(enumOwnProps(s).sort()).to.deep.equal([
      { key: '0', value: 'a' },
      { key: '1', value: 'b' },
      { key: '2', value: 'c' },
      { key: 'aaa', value: 'AAA' },
    ]);

    Object.defineProperty(s, 'bbb', { value: 'BBB' });
    expect(enumOwnProps(s).sort()).to.deep.equal([
      { key: '0', value: 'a' },
      { key: '1', value: 'b' },
      { key: '2', value: 'c' },
      { key: 'aaa', value: 'AAA' },
    ]);
  });

  it('Should return an array of index strings as keys when the argument is' +
  '\n\ta array', function() {
    expect(enumOwnProps([])).to.deep.equal([]);
    expect(enumOwnProps([1, 2, 3]).sort()).to.deep.equal([
      { key: '0', value: 1 },
      { key: '1', value: 2 },
      { key: '2', value: 3 },
    ]);

    var a = ['a', 'b'];
    a.aaa = 'AAA';
    expect(enumOwnProps(a).sort()).to.deep.equal([
      { key: '0', value: 'a' },
      { key: '1', value: 'b' },
      { key: 'aaa', value: 'AAA' },
    ]);

    Object.defineProperty(a, 'bbb', { value: 'BBB' });
    expect(enumOwnProps(a).sort()).to.deep.equal([
      { key: '0', value: 'a' },
      { key: '1', value: 'b' },
      { key: 'aaa', value: 'AAA' },
    ]);
  });

  it('Should return appended properties when the argument is a function',
  function() {
    var fn = function() {};
    expect(enumOwnProps(fn)).to.deep.equal([]);

    fn.aaa = 'AAA';
    expect(enumOwnProps(fn)).to.deep.equal([
      { key: 'aaa', value: 'AAA' },
    ]);

    Object.defineProperty(fn, 'bbb', { value: 'BBB' });
    expect(enumOwnProps(fn).sort()).to.deep.equal([
      { key: 'aaa', value: 'AAA' }
    ]);
  });

  it('Should return an empty array when the argument is a symbol',
  function() {
    if (typeof Symbol !== 'function') {
      this.skip();
      return;
    }

    var symbol = Symbol('foo');
    expect(enumOwnProps(symbol)).to.deep.equal([]);

    try {
      symbol.aaa = 'AAA';
    } catch (e) {
      //console.error('\t', e.message);
    }
    expect(enumOwnProps(symbol)).to.deep.equal([]);

    try {
      Object.defineProperty(symbol, 'bbb', { value: 'BBB' });
    } catch (e) {
      //console.error('\t', e.message);
    }
    expect(enumOwnProps(symbol)).to.deep.equal([]);
  });
});
