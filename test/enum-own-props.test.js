'use strict';

var chai = require('chai');
var expect = chai.expect;

var fav = {}; fav.prop = {}; fav.prop.enumOwnProps = require('..');

var enumOwnProps = fav.prop.enumOwnProps;

describe('fav.prop.enumOwnProps', function() {

  it('Should get all props when the argument is a plain object', function() {
    expect(enumOwnProps({})).to.deep.equal([]);
    expect(enumOwnProps({ a: 1, b: true, c: 'C' })).to.deep
      .equal(['a', 'b', 'c']);
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
    expect(enumOwnProps(new Fn1())).to.deep.equal(['b', 'c']);
  });

  it('Should get only enumerable props', function() {
    var obj = {};
    Object.defineProperties(obj, {
      a: { enumerable: true, value: 1 },
      b: { value: true },
      c: { value: 'C' },
    });
    expect(enumOwnProps(obj)).to.deep.equal(['a']);
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

  it('Should return an array of index strings when the argument is a string',
  function() {
    expect(enumOwnProps('')).to.deep.equal([]);
    expect(enumOwnProps('abc')).to.deep.equal(['0', '1', '2']);
  });

  it('Should return an array of index strings when the argument is a string',
  function() {
    expect(enumOwnProps([])).to.deep.equal([]);
    expect(enumOwnProps([1, 2, 3])).to.deep.equal(['0', '1', '2']);

    var a = ['a', 'b'];
    a.aaa = 'AAA';
    expect(enumOwnProps(a)).to.deep.equal(['0', '1', 'aaa']);
  });

});
