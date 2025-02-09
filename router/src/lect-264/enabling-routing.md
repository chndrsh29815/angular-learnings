# enabling routing
1. we need to register it in main.ts file in providers.

```TS
app.routes.ts

export const routes: Routes = [
    { path: 'tasks', component: TaskComponent }
];

```

```TS
app.config.ts

export const appConfigs: ApplicationConfig = {
  providers: [provideRouter(routes)],
};

```

```TS
main.ts


bootstrapApplication(AppComponent, appConfigs).catch((err) => console.error(err));
```