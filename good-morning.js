const { assert } = console;

let undefinedValue;
assert(undefinedValue === undefined);
assert({}.a === undefined);
assert([][0] === undefined);

assert(typeof undefinedValue === 'undefined');
assert(typeof a === 'undefined');
assert(typeof {}.a === 'undefined');
assert(typeof [][0] === 'undefined');

assert(typeof '' === 'string');

assert(typeof 0 === 'number');
assert(typeof 0.1 === 'number');

assert(typeof {} === 'object');
assert(typeof [] === 'object');

assert(typeof (() => { }) === 'function');
assert(typeof function () { } === 'function');
assert(typeof class { } === 'function');

assert(typeof new function () { } === 'object');
assert(typeof new class { } === 'object');
