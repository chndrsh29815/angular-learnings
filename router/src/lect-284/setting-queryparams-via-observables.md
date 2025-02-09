# syntax

```TS
  order?: 'asc' | 'desc'; 

  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef)

  ngOnInit(): void {
    const subscription = this.activatedRoute.queryParams.subscribe({
      next: params => this.order = params['order']
    })

    this.destroyRef.onDestroy(()=> subscription.unsubscribe());
  }
```