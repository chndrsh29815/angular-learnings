# viewChild signal
instead of using @ViewChild decorator we can use viewChild signal

```TS
import { viewChild } from '@angular/core';

export class NewTicketComponent {
  //@ViewChild('form') form? : ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  onSubmit(title: string, textInput: string) {
    console.log("Entered title: ", title)
    console.log("Entered textInput: ", textInput)
    this.form().nativeElement.reset();
  }
}

```