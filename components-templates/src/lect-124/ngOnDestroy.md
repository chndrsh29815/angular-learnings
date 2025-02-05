# ngOnDestroy
runs before the component is unmounted. used in some claenup activities.

## interface
OnDestroy

## if you dont know the return type of any function how will you bypass.

```TS
 private interval?: ReturnType<typeof setInterval>;
```