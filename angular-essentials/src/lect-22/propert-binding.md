# property binding
1. In angular we can bind data in .ts file via two ways
first: string interpolation which we use when we bind data between tags
second: property binding, if we need to bind data with html attributes then we use this.

# property binding vs attribute binding

```HTML
<div foo="bar">…</div>
<script>
  const div = document.querySelector('div[foo=bar]');

  console.log(div.getAttribute('foo')); // 'bar'
  console.log(div.foo); // undefined

  div.foo = 'hello world';

  console.log(div.getAttribute('foo')); // 'bar'
  console.log(div.foo); // 'hello world'
</script>
```