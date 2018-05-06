
# Warmup

If your terminal is overflow and you wanna clear screen use `console.log('\033c')`

## Index
* [Types](#types)
* [Objects](#objects)
* [Array](#array)

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
Object.keys(obj)     // ['0', '1']
Object.values(obj)   // ['a', 'b']
Object.entries(obj)  // [['0', 'a'], ['1', 'b']]
```

## Arrays <a name="arrays"></a>

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
arr.filter(a => a > 5) // [6, 7]
arr.map(a => a + 1) // [5, 6, 7, 8]
arr.reduce((acc, a) => acc + a, 0) // 22
arr.forEach(console.log)

// join - Joins all elements into a string.
arr.join() // '4,5,5,6'
arr.join('') // '4556'
arr.join('-') // '4-5-5-6'

// mutable operations
const mu = (fn) => {
  let mutableArr = [...arr]
  fn(mutableArr)
  mutableArr
}

mu(a => a.fill(5)) // [5, 5, 5, 5]
mu(a => a.push(7)) // 5
mu(a => a.pop()) // 6
mu(a => a.unshift(3))
mu(a => a.shift())

mu(a => a.reverse())
mu(a => a.splice(2, 0, 'a'))

```

## for...in

for (let a in {a: 5, b: 6}) {
  console.log(a)
}

## for..of

for (let a in [5, 6]) {
  console.log(a)
}

##