# host property on component decorator?
this property takes and object and whatever properties we define in this object it append them as attributes to the host element.

```TS

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control'
  }
})
```