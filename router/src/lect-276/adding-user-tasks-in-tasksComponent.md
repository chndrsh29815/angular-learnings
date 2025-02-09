# adding tasks to user

```TS
export class TasksComponent {
  userId = input.required<string>();
  private tasksService = inject(TasksService)

  userTasks = computed(()=> this.tasksService.allTasks().filter(task=> task.userId === this.userId()))
}

```