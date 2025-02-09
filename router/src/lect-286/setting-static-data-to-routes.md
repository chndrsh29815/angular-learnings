

```TS
    { 
        path: 'users/:userId', 
        component: UserTasksComponent,
        children: userRoutes,
        data: {
            message: "Hello"
        }
    },

```

```TS

export class UserTasksComponent implements OnInit {
  message = input.required<string>();

  // userName = computed(() => this.userService.users.find(u=> u.id === this.userId())?.name)

  ngOnInit(): void {
    console.log("Input Data:", this.message())
  }
}
```