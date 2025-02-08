# ng-pristine
this class is appended if used did not enter any value

# ng-touched/ng-untouched
if user touched input or not.

# ng-dirty 
if value entered is wrong

```HTML
<form #form="ngForm" (ngSubmit)="submitForm(form)">
  <h2>Login</h2>

  <div class="control-row">
    <div class="control no-margin">
      <label for="email">Email</label>
      <input id="email" type="email" name="email" ngModel required email #email="ngModel"/>
    </div>

    <div class="control no-margin">
      <label for="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        ngModel
        required
        minlength="6"
        #password="ngModel"
      />
    </div>

    <button class="button">Login</button>
  </div>
  
  @if(email.touched && email.dirty && email.invalid) {
    <div class="control-error">
      Invalid Email
    </div>
  }

  @if(password.touched && password.dirty && password.invalid) {
    <div class="control-error">
      Invalid Password
    </div>
  }

</form>


```