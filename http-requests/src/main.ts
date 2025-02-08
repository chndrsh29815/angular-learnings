import { bootstrapApplication } from '@angular/platform-browser';

import { HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';

//import { AppComponent } from './app/app.component';

// // lect-219
// import { AppComponent } from './lect-219/app/app.component';

// // lect-220
// import { AppComponent } from './lect-220/app/app.component';

// // lect-222
// import { AppComponent } from './lect-222/app/app.component';

// // lect-223
// import { AppComponent } from './lect-223/app/app.component';

// // lect-224
// import { AppComponent } from './lect-224/app/app.component';

// // lect-225
// import { AppComponent } from './lect-225/app/app.component';

// // lect-226
// import { AppComponent } from './lect-226/app/app.component';

// // lect-227
// import { AppComponent } from './lect-227/app/app.component';

// // lect-228
// import { AppComponent } from './lect-228/app/app.component';

// // lect-231
// import { AppComponent } from './lect-231/app/app.component';

// // lect-232
// import { AppComponent } from './lect-232/app/app.component';

// // lect-233
// import { AppComponent } from './lect-233/app/app.component';

// lect-234
import { AppComponent } from './lect-234/app/app.component';


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
