# syntax Service class

```TS
@Injectable({provideIn: 'root'})
export class TaskService {

}
```

# DI in another classes

```TS
private taskService: TaskService
constuctor(taskService: TaskService) {
    this.taskService = taskService
}

```

```TS
constuctor(private taskService: TaskService) {}

```

```TS
private taskService = inject(TaskService)

```