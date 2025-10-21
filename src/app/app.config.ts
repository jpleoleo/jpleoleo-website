import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes, withHashLocation } from '@angular/router';

import { AppComponent } from './app.component';
import { PrivacyPolicyComponent } from 'src/components/privacy-policy/privacy-policy.component';
import { MainComponent } from 'src/components/main/main.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component: MainComponent,
  },
  {
    path: 'privacy',
    component: PrivacyPolicyComponent,
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideHttpClient()
    // ...
  ]
};
