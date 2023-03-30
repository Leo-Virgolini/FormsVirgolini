import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoFormComponent } from './alumno-form/alumno-form.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ErrorHelperComponent } from './error-helper/error-helper.component';

@NgModule({
  declarations: [
    AlumnoFormComponent,
    SpinnerComponent,
    ErrorHelperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlumnoFormComponent,
    SpinnerComponent,
    ErrorHelperComponent
  ]
})
export class ComponentsModule { }
