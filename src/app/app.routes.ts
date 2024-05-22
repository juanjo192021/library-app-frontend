import { Routes } from '@angular/router';
import DashboardPageComponent from './library/pages/dashboard-page/dashboard-page.component';
import AutoresPageComponent from './library/pages/autores-page/autores-page.component';
import LoginPageComponent from './auth/pages/login-page/login-page.component';
import { isAuthenticatedGuard, isNotAuthenticatedGuard } from './auth/guards';
import { BookLoansPageComponent } from './library/pages/book-loans-page/book-loans-page.component';
import BooksPageComponent from './library/pages/books-page/books-page.component';
import { LiteraryGenresPageComponent } from './library/pages/literary-genres-page/literary-genres-page.component';
import { UsersPageComponent } from './library/pages/users-page/users-page.component';
import { StudentsPageComponent } from './library/pages/students-page/students-page.component';

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
        path: 'book-loans',
        title: 'Préstamo de Libros',
        component: BookLoansPageComponent
      },
      {
        path: 'books',
        title: 'Libros',
        component: BooksPageComponent
      },
      {
        path: 'autors',
        title: 'Autores',
        component: AutoresPageComponent
      },
      {
        path: 'literary-genres',
        title: 'Géneros Literarios',
        component: LiteraryGenresPageComponent
      },
      {
        path: 'students',
        title: 'Estudiantes',
        component: StudentsPageComponent
      },
      {
        path: 'users',
        title: 'Usuarios',
        component: UsersPageComponent
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
