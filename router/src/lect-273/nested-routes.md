# nested routes

this tells that these nested childs needs to be render with parent path appended to desired component.  to render the nested childs we must put placeholder in parent(UserComponent)
```TS
export const routes: Routes = [
    {
        path: '',
        component: NoTaskComponent
    },
    { 
        path: 'users/:userId', 
        component: UserTasksComponent,
        children: [
            {
                path: 'tasks',
                component: TasksComponent
            },
            {
                path: 'tasks/new',
                component: NewTaskComponent
            }
        ] 
    }
];
```