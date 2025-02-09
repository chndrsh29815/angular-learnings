# syntax dynamic routes

```TS
export const routes: Routes = [
    {
        path: '',
        component: NoTaskComponent
    },
    { 
        path: 'users/:userId', 
        component: UserTasksComponent 
    }
];


```

```HTML
<div>
  <a [routerLink]="['/users', user().id]" routerLinkActive="selected">
    <img [src]="imagePath()" [alt]="user().name" />
    <span>{{ user().name }}</span>
  </a>
</div>
```