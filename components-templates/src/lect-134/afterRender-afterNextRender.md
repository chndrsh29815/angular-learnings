# afterRender
1. these hooks invoked in constructors.
2. it will execute everytime changes happen in DOM

# afterNextRender
1. these hooks invoked in constructors.
2. it will execute only once per rendering. 

```TS
constructor() {
  afterRender(() => {
    console.log('AFTER RENDER')
  });

  afterNextRender(() => {
    console.log('AFTER NEXT RENDER')
  });
}

```