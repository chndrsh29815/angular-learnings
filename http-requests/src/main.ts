import { bootstrapApplication } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';

//import { AppComponent } from './app/app.component';

// // lect-219
// import { AppComponent } from './lect-219/app/app.component';

// lect-220
import { AppComponent } from './lect-220/app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()],
}).catch((err) => console.error(err));
