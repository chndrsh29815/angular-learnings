# ng-content with multiple slots
ng-content *select* property used to target css claas of any element and rendered that element only.

button.component.html
```HTML
<span> <ng-content/> </span>
<ng-content select="[.icon]"></ng-content>
```

app.component.html
```HTML
   <button appButton>
        Logout
        <span class="icon"> → </span>
    </button>
```