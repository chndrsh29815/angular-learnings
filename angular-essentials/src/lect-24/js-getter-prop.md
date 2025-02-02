# js getter property
The get syntax binds an object property to a function that will be called when that property is looked up.

```JS
const obj = {
  log: ['a', 'b', 'c'],
  get latest() {
    return this.log[this.log.length - 1];
  },
};

console.log(obj.latest);
// Expected output: "c"
```