import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AdminGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}
  /**
   * You should implement your admin guard logic here
   * @param route 
   * @param segments 
   */
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isAuthenticated()) {
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
  }
}
