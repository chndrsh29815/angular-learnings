# setting Query params 

```TS
  order = input<'asc' | 'desc'>();
```

```HTML

<p>
  <a
    routerLink="./"
    [queryParams]="{ order: order() === 'asc' ? 'desc' : 'asc' }"
  >
    Sort {{ order() === 'asc' ? 'Ascending': 'Descending'}}
  </a>
</p>
```