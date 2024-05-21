import { Routes } from '@angular/router';
import DashboardPageComponent from './library/pages/dashboard-page/dashboard-page.component';
import AutoresPageComponent from './library/pages/autores-page/autores-page.component';
import LoginPageComponent from './auth/pages/login-page/login-page.component';
import { isAuthenticatedGuard, isNotAuthenticatedGuard } from './auth/guards';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [isNotAuthenticatedGuard],
    loadComponent: () => import('./auth/auth-page.component'),
    children: [
      {
        path: 'login',
        title: 'Login',
        component: LoginPageComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      },
    ]
  },
  {
    path: 'library',
    canActivate: [isAuthenticatedGuard],
    loadComponent: () => import('./library/library-page.component'),
    children:[
      {
        path: 'dashboard',
        title: 'Dashboard',
        component: DashboardPageComponent
      },
      {
        path: 'autor-page',
        title: 'Autor Page',
        component: AutoresPageComponent
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      },
    ]
  },

  {
    path: '',
    redirectTo: 'library',
    pathMatch: 'full',
  },
];
