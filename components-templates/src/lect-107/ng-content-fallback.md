# ng-content fallback
if no content is matched in ng-content select attribute then it will fallback to content defined between ng-content

button.component.html
```HTML
<span> <ng-content/> </span>
<span class=".icon">
    <ng-content select="icon"> → </ng-content>
</span>

```

app.component.html
```HTML
   <button appButton>
        Logout
    </button>
```