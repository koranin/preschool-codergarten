console.log('\x1b[37m', 'typeof');
const ok = (value) => value ? console.log('\x1b[32m', 'ok') : console.log('\x1b[31m', 'no');

let undefinedVar;
ok(undefinedVar === undefined);
ok({}.a === undefined);
ok(() => [][0] === undefined);

console.log('\x1b[37m', 'undefined');
ok(typeof undefinedVar === 'undefined');
ok(typeof undefined === 'undefined');
ok(typeof a === 'undefined');
ok(typeof {}.a === 'undefined');
ok(typeof [][0] === 'undefined');

console.log('\x1b[37m', 'boolean');
ok(typeof true === 'boolean');

console.log('\x1b[37m', 'string');
ok(typeof '' === 'string');

console.log('\x1b[37m', 'number');
ok(typeof 0 === 'number');
ok(typeof 0.1 === 'number');
ok(typeof NaN === 'number');

console.log('\x1b[37m', 'function');
ok(typeof (() => { }) === 'function');
ok(typeof function () { } === 'function');
ok(typeof class { } === 'function');

console.log('\x1b[37m', 'object');
ok(typeof {} === 'object');
ok(typeof [] === 'object');
ok(typeof null === 'object');
ok(typeof new function () { } === 'object');
ok(typeof new class { } === 'object');

