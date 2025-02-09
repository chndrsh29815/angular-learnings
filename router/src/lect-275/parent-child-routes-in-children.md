# accessing parent path routes in children

we need to configure  paramsInheritanceStrategy in withRouterConfig like below.

```TS
export const appConfigs: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      })
    ),
  ],
};
```