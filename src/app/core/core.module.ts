import { NgModule } from '@angular/core';
import { AdminGuard } from './admin.guard';
import { AuthService } from './auth.service';

@NgModule({
  providers: [
    AdminGuard,
    AuthService
  ],
})
export class CoreModule { }
