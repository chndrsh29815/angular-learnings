import { bootstrapApplication } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';

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

// lect-226
import { AppComponent } from './lect-226/app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()],
}).catch((err) => console.error(err));
