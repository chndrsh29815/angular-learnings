# encapsulation setting
under the hood angular uses shadow dom feature to scope css styling.
![alt text](image.png)

![alt text](image-1.png)

this setting can be configured via 

```TS

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None
})
```