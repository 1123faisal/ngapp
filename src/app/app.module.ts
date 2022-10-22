import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnlessDirective } from './unless.directive';
import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirective } from './placeholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
