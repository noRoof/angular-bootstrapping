import { NgModule } from '@angular/core';
import { AdminGuard } from './admin.guard';

@NgModule({
  providers: [
    AdminGuard
  ],
})
export class CoreModule { }
