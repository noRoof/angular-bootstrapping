import { ActivatedRouteSnapshot, CanActivateFn, RedirectCommand, Router, UrlSegment, UrlTree } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state) => {
  let roles = route.data['roles'] as Array<string>;
  const userLogged = localStorage.getItem('user');
  console.log(roles)
  const hasPermission = true; //TODO Check for roles

  if (!userLogged || !hasPermission) {
    const router = inject(Router);
    return router.createUrlTree(['/login']);
  }
  return true;
};
