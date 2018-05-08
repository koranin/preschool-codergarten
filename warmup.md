
# Warmup

If your terminal is overflow and you wanna clear screen use `console.log('\033c')`

## Index
* [Types](#types)
* [Objects](#objects)
* [Arrays](#arrays)

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

const obj = { 0: 'a', 1: 'b' }
Object.keys(obj)     // ['0', '1']
Object.values(obj)   // ['a', 'b']
Object.entries(obj)  // [['0', 'a'], ['1', 'b']]

const arr = ['a', 'b']
Object.keys(arr)     // ['0', '1']
Object.values(arr)   // ['a', 'b']
Object.entries(arr)  // [['0', 'a'], ['1', 'b']]
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

### Methods that mutate

```js
// mutable operations
/*const m = f => {
  const arr = ['a', 'b', 'c']
  console.log(f(arr))
  return arr
}*/
let arr;
const reset = () => { arr = ['a', 'b', 'c'] }

arr.fill('x') // ['x', 'x', 'x'] ['x', 'x', 'x']
reset()
// append element
arr.push('x') // 4 ['a', 'b', 'c', 'x']
reset()
// prepend element
arr.unshift('x') // 4 ['x', 'a', 'b', 'c']
reset()
// remove last element
arr.pop() // 'c' ['a', 'b']
reset()
// remove first element
arr.shift() // 'a' ['b', 'c']
reset()
arr.reverse() // ['c', 'b', 'a'] ['c', 'b', 'a']
reset()

const i = 1
// update at i
arr.splice(i, 1, 'x') // ['b'] ['a', 'b, 'c']
reset()
// insert at i
arr.splice(i, 0, 'x') // [] ['a', 'x', 'b', 'd']
reset()
// remove at i
arr.slice(i, 1) // ['b'] ['a', 'd']
reset()
```

## for...in

for (let a in {a: 5, b: 6}) console.log(a)

## for..of

for (let a in [5, 6]) console.log(a)

##