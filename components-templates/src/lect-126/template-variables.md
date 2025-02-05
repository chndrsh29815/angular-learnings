# template variables
Template variables help you use data from one part of a template in another part of the template. Use template variables to perform tasks such as respond to user input or finely tune your application's forms.

```TS
<form (ngSubmit)="onSubmit(titleInput.value, requestArea.value)">
  <app-control label="Title">
    <input id="title" name="title" #titleInput />
  </app-control>
  <app-control label="Request">
    <textarea name="request" id="request" row="3" #requestArea></textarea>
  </app-control>
  <p>
    <button appButton>
      Submit
      <span ngProjectAs="icon"> → </span>
    </button>
  </p>
</form>
```