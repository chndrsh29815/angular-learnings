# ngProjectAs attribute
ng-content *select* property used to target css claas of any element and rendered that element only.css class selecter works below. ***select=".icon"*** . used to select element based on css class.

button.component.html
```HTML
<span> <ng-content/> </span>
<ng-content select=".icon"></ng-content>
```

app.component.html
```HTML
   <button appButton>
        Logout
        <span class="icon"> → </span>
    </button>
```

but if we want to select based on keyword only then we use **ngProjectAs** on element. where this attribute is used that whole element will go into ng-content select.

button.component.html
```HTML
<span> <ng-content/> </span>
<span class=".icon">
    <ng-content select="icon"/>
</span>

```

app.component.html
```HTML
   <button appButton>
        Logout
        <span ngProjectAs="icon"> → </span>
    </button>
```