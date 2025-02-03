# ng-content to use it as restricting allowed elements

```HTML
<p>
  <label>{{ label() }}</label>
  <ng-content select="input, textarea"/>
</p>
```

```HTML
  <app-control label="Title">
    <input id="title" name="title" />
  </app-control>
  <app-control label="Request">
    <textarea name="request" id="request" row="3"></textarea>
  </app-control>
```