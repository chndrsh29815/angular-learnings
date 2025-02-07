# signal to obeservable

```TS

import {toObservable} from '@angular/core/rxjs-interop'


export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);


  ngOnInit(): void {

    const subscription = this.clickCount$.subscribe({
      next: val => console.log("clicked count : " + this.clickCount())
    })

      this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onClick () {
    this.clickCount.update(prevCount => prevCount + 1);
  }
}

```