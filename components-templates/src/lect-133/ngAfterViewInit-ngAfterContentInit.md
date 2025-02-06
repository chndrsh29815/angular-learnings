# ngAfterViewInit with @ViewChild
ngAfterViewInit ensures that ViewChild element will be gurateed have value and it wont be undefined

```TS
export class NewTicketComponent implements AfterViewInit {
  //@ViewChild('form') form? : ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngAfterViewInit() {
    console.log('After view init')
    console.log(this.form().nativeElement);
  }

}
```


# ngAfterContentInit with @ContentChild
ngAfterContentInit ensures that ContentChild element will be gurateed have value and it wont be undefined


```TS
export class ControlComponent implements AfterContentInit {
private el = inject(ElementRef);
//@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input')

 ngAfterContentInit() {
   console.log('After content init')
   console.log(this.control());
 }

}
```
