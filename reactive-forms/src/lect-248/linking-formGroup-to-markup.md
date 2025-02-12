# two ways to link formGroup obj to markup elements

1. using formControl type
```TS

   <div class="control no-margin">
      <label for="email">Email</label>
      <input id="email" type="email" [formControl]="form.controls.email"/>
    </div>

```

2. using formControlName
```TS

    <div class="control no-margin">
      <label for="password">Password</label>
      <input id="password" type="password" formControlName="password"/>
    </div>

```