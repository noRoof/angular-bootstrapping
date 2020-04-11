import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureLayoutComponent } from '../private-layout/secure-layout/secure-layout.component';


const routes: Routes = [
  { 
    path: '', 
    component: SecureLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
