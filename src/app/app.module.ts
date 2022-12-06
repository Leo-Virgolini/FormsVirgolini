import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlumnoFormComponent } from './components/alumno-form/alumno-form.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ErrorHelperComponent } from './components/error-helper/error-helper.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoFormComponent,
    SpinnerComponent,
    ErrorHelperComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
