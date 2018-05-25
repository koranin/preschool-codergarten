
# Warmup

If your terminal is overflow and you wanna clear screen use `console.log('\033c')`

## Index
* [Types](#types)
* [Objects](#objects)
* [Arrays](#arrays)
* [Strings](#strings)

## Types <a name="types"></a>

```js
// typeof ??? === 'undefined'
typeof undefined
typeof a
typeof {}.a
typeof [][0]

// typeof ??? === 'boolean'
typeof true
typeof false

// typeof ??? === 'string'
typeof ''
typeof ""
typeof ``
typeof String()

// typeof ??? === 'number'
typeof 0
typeof 0.1
typeof NaN
typeof parseInt()

// typeof ??? === 'function'
typeof function () {}
typeof function* () {}
typeof async function () {}
typeof (() => {})
typeof (async () => {})
typeof class {}

// typeof ??? === 'object'
typeof {}
typeof []
typeof null
typeof new function () {}
typeof new class {}
```

## Objects <a name="objects"></a>



```js
let obj = { 0: 'a', 1: 'b' }
Object.keys(obj)     // ['0', '1']
Object.values(obj)   // ['a', 'b']
Object.entries(obj)  // [['0', 'a'], ['1', 'b']]

const arr = ['a', 'b']
Object.keys(arr)     // ['0', '1']
Object.values(arr)   // ['a', 'b']
Object.entries(arr)  // [['0', 'a'], ['1', 'b']]

// preserves order of property that are added
let o = {} // {}
o.b = 0 // {b: 0}
o['a'] = 0 // {b:0, a:0}
o[4] = 0 // {'2': 0, b: 0, a: 0}
o['3'] = 0 // {'3': 0, '4': 0, b: 0, a: 0}

```


## Arrays <a name="arrays"></a>

### Methods that don't mutate

```js
Array.isArray([]) // true
Array.isArrray(1) // false

const arr = [4, 5, 5, 6]

arr.every(a => a < 8) // true
arr.every(a => a < 6) // false

arr.some(a => a < 6) // true
arr.some(a => a < 4) // false

arr.includes(4) // true
arr.includes(3) // false
// find
arr.find(a => a > 5) // 6
arr.indexOf(5) // 1
arr.lastIndexOf(5) // 2

// common operations
arr.filter(a => a > 5) // [6]
arr.map(a => a + 1) // [5, 6, 6, 7]
arr.reduce((acc, a) => acc + a, 0) // 21
arr.forEach(console.log)

// join - Joins all elements into a string.
arr.join() // '4,5,5,6'
arr.join('') // '4556'
arr.join('-') // '4-5-5-6'
```

## Strings <a name="strings"></a>

```js

```

### Methods that mutate

```js
let abc = ['a', 'b', 'c'];

let arr = [...abc];
arr.fill('x') // ['x', 'x', 'x'] ['x', 'x', 'x']

// append element
arr = [...abc];
arr.push('x') // 4 ['a', 'b', 'c', 'x']

// prepend element
arr = [...abc];
arr.unshift('x') // 4 ['x', 'a', 'b', 'c']

// remove last element
arr = [...abc];
arr.pop() // 'c' ['a', 'b']

// remove first element
arr = [...abc];
arr.shift() // 'a' ['b', 'c']

arr = [...abc];
arr.reverse() // ['c', 'b', 'a'] ['c', 'b', 'a']

const i = 1
// update at i
arr.splice(i, 1, 'x') // ['b'] ['a', 'b, 'c']
// insert at i
arr.splice(i, 0, 'x') // [] ['a', 'x', 'b', 'd']
// remove at i
arr.slice(i, 1) // ['b'] ['a', 'd']
```

### Tips

## for...in

Iterates over object properties

```js
for (const prop in {a:1, b:1, c:1}) {
  console.log(prop); // a b c
}

for (const i in [4, 5, 6]) {
   console.log(i); // 0 1 2
}

for (const i in 'abc') {
  console.log(i); // a b c
}
```
## for..of

Iterates over `iterable objects`

```js
for (const num of [4, 5, 6]) {
  console.log(num); // 4 5 6
}

for (const ch of 'abc') {
  console.log(ch); // a b c
}
```

##

## Functions

```js

```
