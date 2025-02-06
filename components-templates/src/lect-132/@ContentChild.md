# @ViewChild vs @ContentChild
@ViewChild is used to get hold of the element which is projected in template but id content is not projected like in ng-content then we use contentChild.

```TS
//@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input')

 onClick() {
  //console.log(this.control);
  console.log(this.control());
 }
```