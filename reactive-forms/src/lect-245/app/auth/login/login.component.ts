import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private form = viewChild.required<NgForm>('form');
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(()=> {
      const loadedForm = window.localStorage.getItem("saved-form-data");
      if(loadedForm) {
        const saveValues = JSON.parse(loadedForm).email;
        setTimeout(()=>{
          this.form().controls['email']?.setValue(saveValues);
        },1)
        
      }
      const subscription = this.form().valueChanges?.pipe(debounceTime(500)).subscribe({
        next: (value) => {
          console.log(value);
          window.localStorage.setItem("saved-form-data", JSON.stringify({email: value.email}))
        }
      })

      this.destroyRef.onDestroy(()=> subscription?.unsubscribe())
    })
  }

  submitForm(formData: NgForm) {
    if(formData.form.invalid) {
      return;
    }
    const enteredEmail = formData.form.value.email;
    const enteredPassword = formData.form.value.password;
    console.log(enteredEmail, enteredPassword);
    formData.form.reset();
  }
}
