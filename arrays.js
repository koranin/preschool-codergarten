console.log(Array.isArray(1));

let arr = ['a', 'b'];
console.log(arr[0] === arr['0']);

console.log(arr.length === 2);

console.log(arr.forEach((item, i) => {}));

arr = ['a', 'b'];
console.log(arr.push('c') === arr.length);
console.log(arr);
console.log(arr.pop() === 'c');
console.log(arr);

arr = ['a', 'b'];
console.log(arr.unshift('c') === arr.length);
console.log(arr);
console.log(arr.shift() === 'c');
console.log(arr);

arr = ['a', 'b', 'c', 'd'];
console.log(arr.splice(1, 2));
arr;

//copy
arr = ['a', 'b'];
const arr2 = arr.slice();
arr.push('c');
arr2;
arr2.push('z');
arr;

arr = ['a', 'b'];
console.log(arr.reverse());

let what = Array.isArray([]);
what;


