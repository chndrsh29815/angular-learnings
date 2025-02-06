# effect function
1. signal uses subscriptions to render the change in UI.
2. in tempate view if signal property is used it is automatically subscribed for the change. so whenever change happen it updates the DOM.
3. but typescript file if we use signal property those are not automatically subscribed. For that we use effect function

```TS
  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    })
  }

```