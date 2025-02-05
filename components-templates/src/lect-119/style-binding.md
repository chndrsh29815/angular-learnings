# inline style binding

```HTML
<div
  [class]="{
    status: true,
    'status-online': currentStatus === 'online',
    'status-offline': currentStatus === 'offline',
    'status-unknown': currentStatus === 'unknown'
  }" [style]="{
    'font-size':'64px'
  }">
--
</div>
```