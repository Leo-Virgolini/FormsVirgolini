import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent implements OnInit {

  public loading: boolean;
  public submitted: boolean;

  public formulario: FormGroup;
  public nombre: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁ-Úá-ú ]+$'), Validators.minLength(2), Validators.maxLength(20)]);
  public apellido: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁ-Úá-ú ]+$'), Validators.minLength(2), Validators.maxLength(20)]);
  public fechaNacimiento: FormControl = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
  public dni: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(6), Validators.maxLength(10)]);
  public provincia: FormControl = new FormControl('', [Validators.required]);
  public localidad: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁ-Úá-ú ]+$'), Validators.minLength(2), Validators.maxLength(20)]);
  public calle: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁ-Úá-ú0-9 ]+$'), Validators.minLength(2), Validators.maxLength(20)]);
  public email: FormControl = new FormControl('', [Validators.required, Validators.email, Validators.minLength(11), Validators.maxLength(64)]);
  public password: FormControl = new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[0-9])(?=.*?[a-zA-Z])[a-zA-Z0-9]+$'), Validators.minLength(4), Validators.maxLength(20)]);
  public repeatPassword: FormControl = new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[0-9])(?=.*?[a-zA-Z])[a-zA-Z0-9]+$'), Validators.minLength(4), Validators.maxLength(20)]);

  constructor(private formBuilder: FormBuilder) {
    this.loading = false;
    this.submitted = false;

    this.formulario = this.formBuilder.group({
      nombre: this.nombre,
      apellido: this.apellido,
      fechaNacimiento: this.fechaNacimiento,
      dni: this.dni,
      direccion: this.formBuilder.group({
        provincia: this.provincia,
        localidad: this.localidad,
        calle: this.calle
      }),
      email: this.email,
      password: this.password,
      repeatPassword: this.repeatPassword
    },
      { validators: [this.passwordsMatchValidator()] }
    )
  }

  ngOnInit(): void {
  }

  private passwordsMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      console.log(this.formulario?.controls['password']?.value);
      console.log(this.formulario?.controls['repeatPassword']?.value);
      if (this.password?.value !== this.repeatPassword?.value)
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