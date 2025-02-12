# form submission
1. first register this form to formGroup.
2. submit form via ngSubmit.

```HTML

<form [formGroup]="form" (ngSubmit)="submitForm()">
  <h2>Login</h2>

  <div class="control-row">
    <div class="control no-margin">
      <label for="email">Email</label>
      <input id="email" type="email" [formControl]="form.controls.email"/>
    </div>

    <div class="control no-margin">
      <label for="password">Password</label>
      <input id="password" type="password" formControlName="password"/>
    </div>

    <button class="button">Login</button>
  </div>
</form>

```

```TS

export class LoginComponent {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  submitForm() {
    const enteredEmail = this.form.controls.email.value;
    const enteredPassword = this.form.controls.password.value;

    console.log(enteredEmail, enteredPassword)
  }
}

```