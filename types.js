const { assert } = console;

let undefinedVar;
assert(undefinedVar === undefined);
assert({}.a === undefined);
assert([][0] === undefined);

assert(typeof undefinedVar === 'undefined');
assert(typeof undefined === 'undefined');
assert(typeof a === 'undefined');
assert(typeof {}.a === 'undefined');
assert(typeof [][0] === 'undefined');

assert(typeof true === 'boolean');

assert(typeof '' === 'string');

assert(typeof 0 === 'number');
assert(typeof 0.1 === 'number');
assert(typeof NaN === 'number');

assert(typeof (() => { }) === 'function');
assert(typeof function () { } === 'function');
assert(typeof class { } === 'function');

assert(typeof {} === 'object');
assert(typeof [] === 'object');
assert(typeof null === 'object');
assert(typeof new function () { } === 'object');
assert(typeof new class { } === 'object');

