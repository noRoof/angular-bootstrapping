import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './guards/auth.guard';
import { exampleResolver, examplesResolver } from './resolvers';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'examples', loadComponent: () => import('./pages/examples/examples.component'), canActivate: [authGuard], resolve: {data: examplesResolver}},
      {path: 'examples/:id', loadComponent: () => import('./pages/example-detail/example-detail.component'), canActivate: [authGuard], resolve: {data: exampleResolver}},
      { path: '',   redirectTo: '/examples', pathMatch: 'full' },
    ]
  },
  { path: '**', component: LoginComponent }
];
