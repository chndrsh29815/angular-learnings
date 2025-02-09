# enable input binding with routes

```TS
export const appConfigs: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding())],
};
```

access values like below

```TS
export class UserTasksComponent {
  userId = input.required<string>();

  private userService = inject(UsersService);

  userName = computed(() => this.userService.users.find(u=> u.id === this.userId())?.name)
}

```