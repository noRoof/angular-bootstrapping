import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicLayoutModule } from './public-layout/public-layout.module';
import { CoreModule } from './core/core.module';
import { SpinnerModule } from '@nrdworkspace/spinner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    PublicLayoutModule,
    SpinnerModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
