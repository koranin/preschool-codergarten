
# Warmup

If your terminal is overflow and you wanna clear screen use `console.log('\033c')`

## Types

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

## Objects

```js

// Object.keys are ['0', '1']
const obj = { 0: 'a', 1: 'b' }
Object.keys(obj) // ['0', '1']
Object.values(obj) // ['a', 'b']
Object.entries(obj) // [['0', 'a'], ['1', 'b']]

const arr = ['a', 'b']
Object.keys(obj) // ['0', '1']
Object.values(obj) // ['a', 'b']
Object.entries(obj) // [['0', 'a'], ['1', 'b']]

```