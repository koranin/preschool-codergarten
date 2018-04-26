const { assert, log } = console;

assert({ 1: 'a' }[1] === 'a');
assert({ 1: 'a' }['1'] === 'a');
assert({ '1': 'a' }[1] === 'a');
assert({ '1': 'a' }['1'] === 'a');

//console.log(Object.entries({ a: 'x', b: 'y' }).map(([k, v]) => k + v));

const toKv = ([k, v]) => k + v;
assert(Object.entries({ a: 1 }).map(toKv)[0] = 'a1');




console.log(Object.entries({ a: 'x', b: 'y' }));
console.log(Object.entries({ 1: 'a', 2: 'b' }));
console.log({ 1: 'a' }[1]);
console.log({ 1: 'a' }['1']);
console.log(['a'][0]);
console.log(['a']['0']);
