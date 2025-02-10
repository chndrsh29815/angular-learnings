# setting page title 

with router we can set page title in browser with title property.
1. for static page title
```TS
    {
        path: '',
        component: NoTaskComponent,
        // redirectTo: 'users/u1',
        // pathMatch: 'prefix',
        title: 'No task selected'
    },
    
```

2. for dynamic page title
```TS

    { 
        path: 'users/:userId', 
        component: UserTasksComponent,
        children: userRoutes,
        data: {
            message: "Hello"
        },
        resolve: {
            userName: userNameResolver
        },
        title: titleResolver
    },

```

```TS
export const titleResolver: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerStat: RouterStateSnapshot
) => {
  
  return userNameResolver(activatedRoute, routerStat) + ' tasks';
};


```