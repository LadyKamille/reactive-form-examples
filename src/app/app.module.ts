import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './basic_form/login/login.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LoginComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
