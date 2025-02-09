# resolve property in route definitions

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
        }
    },
```

1. this resolve property is used to resolve dynamic data whenever that path is activated or changed.
2. It takes a special kind of resolver fun and executed everytime if there is any change.



```TS
export const userNameResolver: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerStat: RouterStateSnapshot
) => {
  const userService  = inject(UsersService)
  const userName = userService.users.find((u) => u.id === activatedRoute.paramMap.get('userId'))
  ?.name || '';
  return userName;
};

```

# Class-based Resolvers

In the previous lecture, you learned how to define route data resolvers as functions. This is the modern, recommended approach.

But you can also define resolvers as classes - like this:

```TS
    @Injectable({ providedIn: 'root' })
    export class UserNameResolver implements Resolve<string> {
      constructor(private usersService: UsersService) {}
      resolve(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const userName =
          this.usersService.users.find(
            (u) => u.id === activatedRoute.paramMap.get('userId')
          )?.name || '';
        return userName;
      }
    }
```

The resolve class is then assigned to a route like this:
```TS
    {
      path: 'users/:userId', // <your-domain>/users/<uid>
      component: UserTasksComponent,
      children: userRoutes,
      data: {
        message: 'Hello!',
      },
      resolve: {
        userName: UserNameResolver,
      },
    }
```
Please note that this approach is deprecated though - the modern, function-based one (shown in the previous lecture) is therefore recommended!