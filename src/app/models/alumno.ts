export class Alumno {

    private _id: number;
    private _nombre: string;
    private _apellido: string;
    private _fechaNacieminto: Date;
    private _dni: string;
    private _email: string;
    private _password: string;

    constructor(id: number, nombre: string, apellido: string, fechaNacieminto: Date, dni: string, email: string, password: string) {
        this._id = id;
        this._nombre = nombre;
        this._apellido = apellido;
        this._fechaNacieminto = fechaNacieminto;
        this._dni = dni;
        this._email = email;
        this._password = password;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get id(): number {
        return this._id
    }

    public set nombre(nombre: string) {
        this._nombre = nombre;
    }

    public get nombre(): string {
        return this._nombre
    }

    public set apellido(apellido: string) {
        this._apellido = apellido;
    }

    public get apellido(): string {
        return this._apellido
    }

    public set fechaNacieminto(fechaNacieminto: Date) {
        this._fechaNacieminto = fechaNacieminto;
    }

    public get fechaNacieminto(): Date {
        return this._fechaNacieminto
    }

    public set dni(dni: string) {
        this._dni = dni;
    }

    public get dni(): string {
        return this._dni
    }

    public set email(email: string) {
        this._email = email;
    }

    public get email(): string {
        return this._email
    }

    public set password(password: string) {
        this._password = password;
    }

    public get password(): string {
        return this._password
    }

}
