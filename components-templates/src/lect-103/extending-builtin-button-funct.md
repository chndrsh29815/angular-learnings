# attibute selector
these are the selectors used to extend built in elements functionality. The built in elements whenever encounter the mentioned attribute that component is renedered.

```TS

@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
```

here whenever button element with appButton attribute is encountered this butoon component will rendered.

```HTML
 <button appButton></button>
```