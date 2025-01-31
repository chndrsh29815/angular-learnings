1. multiple properties to add the styles

```TS
@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    styleUrls: ['./header.component.css', 'abc.css'],
    styles: 'h2 {color: "blue"}'

})
```