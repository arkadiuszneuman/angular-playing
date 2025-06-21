import { Routes } from '@angular/router';
import { Simple } from './simple/simple';

export const routes: Routes = [
  {
    path: '',
    component: Simple
  },
  {
    path: 'id-and-param/:id',
    loadComponent: () => import('./id-and-param/id-and-param').then(m => m.IdAndParam),
    title: 'ID and Param',
  },
  {
    path: 'directives',
    loadComponent: () => import('./directives/directives').then(m => m.Directives),
  },
  {
    path: 'components',
    loadComponent: () => import('./components/components').then(m => m.Components),
  }
];
