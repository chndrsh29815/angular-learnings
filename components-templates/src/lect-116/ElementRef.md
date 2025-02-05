# ElementRef 
It is used to get access the host element programatically.

```TS
import { ElementRef } from '@angular/core';

private el = inject(ElementRef);

 onClick() {
  console.log('clicked');
  console.log(this.el);
 }
```