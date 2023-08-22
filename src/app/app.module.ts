import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { LoginComponent } from './basic-form/login/login.component';
import { NestedFormModule } from './nested-form/nested-form.module';
import { ComplexValidationModule } from './complex-validation/complex-validation.module';
import { ConditionalRenderingComponent } from './conditional-rendering/conditional-rendering.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,

    ComplexValidationModule,
    NestedFormModule,

    // Standalone
    ConditionalRenderingComponent,
    LoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
