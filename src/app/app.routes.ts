import { Routes } from '@angular/router';
import { Simple } from './simple/simple';
import { IdAndParam } from './id-and-param/id-and-param';

export const routes: Routes = [
  {
    path: '',
    component: Simple
  },
  {
    path: 'id-and-param/:id',
    loadComponent: () => import('./id-and-param/id-and-param').then(m => m.IdAndParam),
    title: 'ID and Param',
  }
];
