import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Tabla } from './tabla/tabla';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'tabla', component: Tabla },
  { path: '**', redirectTo: '' } // redirige rutas inválidas al inicio
];