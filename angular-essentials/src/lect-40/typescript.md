# Typescript concepts
1. pipe syntax

```TS
 @Input() id: string | undefined
```

2. type vs interface
```TS
    
    type User = {
        id: string;
        avatar: string;
        name: string;
    }

    interface User {
        id: string;
        avatar: string;
        name: string;
    }
```