import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  // const url = state.url;
  // localStorage.setItem('path',url);

  const authService = inject(AuthService);
  const router = inject(Router);

  console.log({status: authService.authStatus()})

  if( authService.authStatus() === AuthStatus.authenticated ) {return true};

  //if( authService.authStatus() === AuthStatus.checking) return false;


  router.navigateByUrl('/auth/login');

  return false;
};
