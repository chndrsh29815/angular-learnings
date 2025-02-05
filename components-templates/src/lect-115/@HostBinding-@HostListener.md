# host decorator property and @Hostbinding/@HostListener

host property
```TS
@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
 label = input.required<string>();
 onClick() {
  console.log('clicked');
 }
}
```

Bindings
```TS
@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,

})
export class ControlComponent {
 label = input.required<string>();
 @HostBinding('class') className = 'control';
 @HostListener('click') onClick() {
  console.log('clicked');
 }
}
```

both have same effect but different syntax