# DestroyRef
in modern angular version we have better version of ngOnDestroy.
1. this DestroyRef first set up the listening function when its injected.
2. this listener will executes when component destroyed.

```TS
 private destroyRef = inject(DestroyRef);


  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 2000);

    this.destroyRef.onDestroy(()=> {
      clearTimeout(interval)
    })
  }

```