# redirectTo

it is used to redirect to the path where we wanted.

# pathMatch
1. preix: it starts matching with the path combined with parent path.
2. full: it will check the full path or exact path
```TS
export const routes: Routes = [
    {
        path: '',
        component: NoTaskComponent,
        // redirectTo: 'users/u1',
        // pathMatch: 'prefix'
    },
    { 
        path: 'users/:userId', 
        component: UserTasksComponent,
        children: [
            {
                path: '',
                redirectTo: 'tasks',
                pathMatch: 'full'
            },
            {
                path: 'tasks',
                component: TasksComponent
            },
            {
                path: 'tasks/new',
                component: NewTaskComponent
            }
        ] 
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
```