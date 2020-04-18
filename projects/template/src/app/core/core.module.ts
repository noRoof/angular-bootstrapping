import { NgModule } from '@angular/core';
import { AdminGuard } from './admin.guard';
import { AuthService } from './auth.service';
import { SpinnerService } from '@nrdworkspace/spinner';

@NgModule({
  providers: [
    AdminGuard,
    AuthService,
    SpinnerService
  ],
})
export class CoreModule { }
