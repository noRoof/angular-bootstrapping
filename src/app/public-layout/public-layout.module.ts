import { NgModule } from '@angular/core';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SiteFooterComponent,
    SiteHeaderComponent,
    SiteLayoutComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports:[
    SiteFooterComponent,
    SiteHeaderComponent,
    SiteLayoutComponent
  ]
})
export class PublicLayoutModule { }
