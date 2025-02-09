import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfigs: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding())],
};
