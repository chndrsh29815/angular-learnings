# required Input decorator property
this will enforce the calling component throw error if value is not passed.

```TS
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
```