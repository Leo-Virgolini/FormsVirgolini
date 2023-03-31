import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoFormComponent } from './alumno-form/alumno-form.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ErrorHelperComponent } from './error-helper/error-helper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AlumnoFormComponent,
    SpinnerComponent,
    ErrorHelperComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  exports: [
    AlumnoFormComponent,
    SpinnerComponent,
    ErrorHelperComponent
  ]
})
export class ComponentsModule { }
