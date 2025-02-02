# signal input
1. this is modern way of accepting inputs from outside components which are based on signals.
2. It is worth noted that input signals are read-only which means they cannot be set inside components.

```TS
  avatar = input.required<string>()
  name = input.required<string>()

  imagePath = computed(() => 'assets/users/' + this.avatar())
  
```

