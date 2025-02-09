1. this below special syntax allows to go to path removing last segment.

```TS
  <a routerLink="../" >Cancel</a>
```

2. programatically we need to inject Router service like below 
```TS
export class NewTaskComponent {
  userId = input.required<string>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');
  private tasksService = inject(TasksService);
  private router = inject(Router);

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      },
      this.userId()
    );
    this.router.navigate(["users", this.userId(), "tasks"],{
      replaceUrl: true
    })
  }
}
```