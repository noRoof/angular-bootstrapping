import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardPageComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
