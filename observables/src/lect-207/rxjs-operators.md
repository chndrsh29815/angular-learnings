# operators in rxJs
Operators are functions. 

Pipeable Operators are the kind that can be piped to Observables using the syntax 
```TS
observableInstance.pipe(operator) 
```

```TS
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    const subscription = interval(1000).pipe(
      map((val)=> val * 2)
    ).subscribe({
      next: (val) => console.log(val),
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
```