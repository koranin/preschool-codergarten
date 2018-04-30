//const { assert, log } = console;
const assert = require('assert');

({ 1: 'a' }[1] === 'a');
({ 1: 'a' }['1'] === 'a');
({ '1': 'a' }[1] === 'a');
({ '1': 'a' }['1'] === 'a');

//console.log(Object.entries({ a: 'x', b: 'y' }).map(([k, v]) => k + v));

assert.deepStrictEqual({1: 'a'}, {'1': 'a'});
assert.notDeepStrictEqual({0: 'a'}, ['a']);

assert.deepStrictEqual(
  Object.keys({0: 'a', 1: 'b'}), 
  ['0', '1']);
assert.deepStrictEqual(
  Object.keys(['a', 'b']), 
  ['0', '1']);

assert.deepStrictEqual(
  Object.values({0: 'a', 1: 'b'}), 
  ['a', 'b']);
assert.deepStrictEqual(
  Object.values(['a', 'b']),
  ['a', 'b']);

assert.deepStrictEqual(
  Object.entries({0: 'a', 1: 'b'}), 
  [ ['0', 'a'], ['1', 'b'] ]);
assert.deepStrictEqual(
  Object.entries(['a', 'b']), 
  [ ['0', 'a'], ['1', 'b'] ]);

