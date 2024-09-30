import { Propietario } from "./propietario.js";

export class Auto {
  private patente: string;
  private marca: string;
  private modelo: number;
  private propietario: Propietario;
  constructor(
    patente: string,
    marca: string,
    modelo: number,
    propietario: Propietario
  ) {
    this.patente = patente;
    this.marca = marca;
    this.modelo = modelo;
    this.propietario = propietario;
  }

  public getTipo(): string {
    return "Automóvil";
  }

  // Métodos para acceder a los atributos
  public getPatente(): string {
    return this.patente;
  }

  public setPatente(nuevaPatente: string): void {
    this.patente = nuevaPatente;
  }

  public getMarca(): string {
    return this.marca;
  }

  public setMarca(nuevaMarca: string): void {
    this.marca = nuevaMarca;
  }

  public getModelo(): number {
    return this.modelo;
  }

  public setModelo(nuevoModelo: number): void {
    this.modelo = nuevoModelo;
  }

  public getPropietario(): Propietario {
    return this.propietario;
  }

  public setPropietario(nuevoPropietario: Propietario): void {
    this.propietario = nuevoPropietario;
  }
}
