# @ViewChild decorator
1. ViewChild is used to get hold of elements in View of template.
2. They have ElementRef as wrapper arround the elements

## Component ViewChild
if custom component classes passed as arg in ViewChild then they will give custom component as elements.

```Html
   <button appButton>
      Submit
      <span ngProjectAs="icon"> → </span>
    </button>

```

```TS
@ViewChild(ButtonComponent) btn?: ElementRef<ButtonComponent>

this.btn?.nativeElement.reset()
```

## template ViewChild
we can access elements using template variables

```html
<form (ngSubmit)="onSubmit(titleInput.value, requestArea.value)" #form>
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

```TS
  @ViewChild('form') form? : ElementRef<HTMLFormElement>;
  onSubmit(title: string, textInput: string) {
    console.log("Entered title: ", title)
    console.log("Entered textInput: ", textInput)
    this.form?.nativeElement.reset();
  }
```