export class Propietario {
  private nombre: string;
  private apellido: string;
  private numRegistro: number;

  constructor(nombre: string, apellido: string, numRegistro: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.numRegistro = numRegistro;
  }

  // Métodos para acceder a los atributos
  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre;
  }

  public getApellido(): string {
    return this.apellido;
  }

  public setApellido(nuevoApellido: string): void {
    this.apellido = nuevoApellido;
  }

  public getNumRegistro(): number {
    return this.numRegistro;
  }

  public setNumRegistro(nuevoNum: number): void {
    this.numRegistro = nuevoNum;
  }

  mostrarNombrePropietario(): string {
    return `${this.nombre} ${this.apellido}`;
  }
}
