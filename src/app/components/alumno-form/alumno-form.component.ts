import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent implements OnInit {

  public formulario!: FormGroup;
  public loading: boolean;
  public submitted: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.loading = false;
    this.submitted = false;
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁ-Úá-ú ]+$'), Validators.minLength(2), Validators.maxLength(20)]],
      apellido: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁ-Úá-ú ]+$'), Validators.minLength(2), Validators.maxLength(20)]],
      fechaNacimiento: ['', [Validators.required, Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/), Validators.minLength(10), Validators.maxLength(10)]],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(6), Validators.maxLength(10)]],
      direccion: this.formBuilder.group({
        provincia: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
        localidad: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁ-Úá-ú0-9 ]+$'), Validators.minLength(4), Validators.maxLength(20)]],
        calle: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁ-Úá-ú0-9 ]+$'), Validators.minLength(2), Validators.maxLength(20)]]
      }),
      email: ['', [Validators.required, Validators.email, Validators.minLength(11), Validators.maxLength(64)]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*?[0-9])(?=.*?[a-zA-Z])[a-zA-Z0-9]+$'), Validators.minLength(4), Validators.maxLength(20)]],
      repeatPassword: ['', [Validators.required, Validators.pattern('^(?=.*?[0-9])(?=.*?[a-zA-Z])[a-zA-Z0-9]+$'), Validators.minLength(4), Validators.maxLength(20)]]
    },
      { validators: [this.passwordsMatchValidator] } // FormGroup Validators
    );
    // this.formulario.setValidators([this.passwordsMatchValidator]);
  }

  public passwordsMatchValidator() {
    return (formGroup: FormGroup) => {
      console.log(this.formulario.controls['password'].value);
      console.log(this.formulario.controls['repeatPassword'].value);
      if (this.formulario.controls['password'].value !== this.formulario.controls['repeatPassword'].value)
        return {
          passwordMismatch: true
        }
      return null;
    }
  }

  public onSubmit(): void {

    this.formulario.markAllAsTouched();
    this.submitted = true;
    if (this.formulario.valid) {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        console.log(this.formulario.value);
        console.log(this.formulario.valid);
      }, 500);
    }
  }

}