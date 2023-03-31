import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent implements OnInit {

  public formulario!: FormGroup;
  public loading: boolean;
  public submitted: boolean;

  nombre: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁ-Úá-ú ]+$'), Validators.minLength(2), Validators.maxLength(20)]);
  apellido: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁ-Úá-ú ]+$'), Validators.minLength(2), Validators.maxLength(20)]);
  fechaNacimiento: FormControl = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
  dni: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(6), Validators.maxLength(10)]);
  provincia: FormControl = new FormControl('', [Validators.required]);
  localidad: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁ-Úá-ú ]+$'), Validators.minLength(2), Validators.maxLength(20)]);
  calle: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁ-Úá-ú0-9 ]+$'), Validators.minLength(2), Validators.maxLength(20)]);
  email: FormControl = new FormControl('', [Validators.required, Validators.email, Validators.minLength(11), Validators.maxLength(64)]);
  password: FormControl = new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[0-9])(?=.*?[a-zA-Z])[a-zA-Z0-9]+$'), Validators.minLength(4), Validators.maxLength(20)]);
  repeatPassword: FormControl = new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[0-9])(?=.*?[a-zA-Z])[a-zA-Z0-9]+$'), Validators.minLength(4), Validators.maxLength(20)]);

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
    // this.formulario = this.formBuilder.group({
    //   nombre: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁ-Úá-ú ]+$'), Validators.minLength(2), Validators.maxLength(20)]],
    //   apellido: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁ-Úá-ú ]+$'), Validators.minLength(2), Validators.maxLength(20)]],
    //   fechaNacimiento: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    //   dni: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(6), Validators.maxLength(10)]],
    //   direccion: this.formBuilder.group({
    //     provincia: ['', [Validators.required]],
    //     localidad: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁ-Úá-ú0-9 ]+$'), Validators.minLength(4), Validators.maxLength(20)]],
    //     calle: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁ-Úá-ú0-9 ]+$'), Validators.minLength(2), Validators.maxLength(20)]]
    //   }),
    //   email: ['', [Validators.required, Validators.email, Validators.minLength(11), Validators.maxLength(64)]],
    //   password: ['', [Validators.required, Validators.pattern('^(?=.*?[0-9])(?=.*?[a-zA-Z])[a-zA-Z0-9]+$'), Validators.minLength(4), Validators.maxLength(20)]],
    //   repeatPassword: ['', [Validators.required, Validators.pattern('^(?=.*?[0-9])(?=.*?[a-zA-Z])[a-zA-Z0-9]+$'), Validators.minLength(4), Validators.maxLength(20)]]
    // },
    //   { validators: [this.passwordsMatchValidator()] }
    // )
  }

  public passwordsMatchValidator(): ValidatorFn {
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