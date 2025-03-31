import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isTokenAvailable = localStorage.getItem('token')
  const router = inject(Router)
  if(!isTokenAvailable) {
    router.navigate(['/']);
    return false;
  }
  return true;
};
