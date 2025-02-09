import { bootstrapApplication } from '@angular/platform-browser';

// import { AppComponent } from './app/app.component';

// lect-263
import { AppComponent } from './lect-263/app/app.component';
import { appConfigs } from './lect-264/app/app.config';

bootstrapApplication(AppComponent, appConfigs).catch((err) => console.error(err));
