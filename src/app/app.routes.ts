import { Routes } from '@angular/router';
import { Simple } from './simple/simple';
import { authGuard } from './auth-guard';

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
  },
  {
    path: 'http-test',
    loadComponent: () => import('./http-test/http-test').then(m => m.HttpTest),
    children: [
      {
        path: ':id',
        loadComponent: () => import('./http-test/form-template/form-template').then(m => m.FormTemplate),
      },
    ]
  },
  {
    path: 'form-reactive',
    loadComponent: () => import('./form-reactive/form-reactive').then(m => m.FormReactive),
  },
  {
    path: 'guarded',
    loadComponent: () => import('./form-reactive/form-reactive').then(m => m.FormReactive),
    canActivate: [authGuard]
  },
];
