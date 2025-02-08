1. interceptors are just function to intercept http requests.

```TS

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([loggingInterceptors]))],
}).catch((err) => console.error(err));

function loggingInterceptors(request: HttpRequest<unknown>, next: HttpHandlerFn) {
  const req = request.clone({
    headers: request.headers.set("X-testing", "Testing")
  })
  console.log(request);
  return next(req);
}

```