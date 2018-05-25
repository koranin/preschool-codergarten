### remove duplicate

```js
const unique = arr => [... new Set(arr)];
```

```js
const unique = arr => {
  const unique = {};
  arr.forEach(item => {
    unique[item] = true;
  });
  return Object.keys(unique);
};
```

### remove duplicate preserves order

```js
const unique = arr => {
  const unique = {};
  const result = [];
  arr.forEach((item) => {
    if (!unique[item]) {
      unique[item] = true;
      result.push(item);
    }
  });
  return result;
}
```

