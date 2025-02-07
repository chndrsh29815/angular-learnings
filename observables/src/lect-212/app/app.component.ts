import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop'

import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, {initialValue: 0});

  customObservable$ = new Observable((subscribe)=> {
    let timesExecuted=0;
    const itvl = setInterval(() => {
      if(timesExecuted > 3) {
        subscribe.complete(),
        clearInterval(itvl);
        return;
      }
      console.log("emitting values...")
      subscribe.next({message: 'custom'})
      timesExecuted++;
    },2000)
    
  })

  ngOnInit(): void {

    const subscription = this.clickCount$.subscribe({
      next: val => console.log("clicked count : " + this.clickCount())
    })

      this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });

    this.customObservable$.subscribe({
      next: val => console.log(val),
      complete: ()=> console.log("completed")
    })
  }

  onClick () {
    this.clickCount.update(prevCount => prevCount + 1);
  }
}
