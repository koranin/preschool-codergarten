let obj = { a:1, b:2 };

console.log('for...in object');

for (let item in obj) {
  console.log(item);
}

obj = ['a', 'b'];

for (let item in obj) {
  console.log(item);
}

console.log('for...of iterable');

let iterable = ['a', 'b'];

for (let item of iterable) {
  console.log(item);
}

iterable = function* () {
  yield 'a';
  yield 'b';
};

for (let item of iterable()) {
  item;
}

for (let ch of 'ab') {
  ch;
}

for (let ch of 'a b') {
  ch;
}
