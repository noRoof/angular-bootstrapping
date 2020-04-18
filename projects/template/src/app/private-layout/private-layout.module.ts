import { NgModule } from '@angular/core';
import { SecureLayoutComponent } from './secure-layout/secure-layout.component';
import { SecureFooterComponent } from './secure-footer/secure-footer.component';
import { SecureHeaderComponent } from './secure-header/secure-header.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SecureLayoutComponent,
    SecureFooterComponent,
    SecureHeaderComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    SecureLayoutComponent,
    SecureFooterComponent,
    SecureHeaderComponent
  ]
})
export class PrivateLayoutModule { }
