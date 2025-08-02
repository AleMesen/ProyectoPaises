import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { Routes } from '@angular/router';
import { Tabla } from './tabla/tabla';
import { Home } from './home/home';

export const appRoutes: Routes = [
  { path: '', component: Home },
  { path: 'tabla', component: Tabla },
];

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes))
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
