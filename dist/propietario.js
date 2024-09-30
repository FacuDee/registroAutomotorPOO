export class Propietario {
    constructor(nombre, apellido, numRegistro) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.numRegistro = numRegistro;
    }
    // Métodos para acceder a los atributos
    getNombre() {
        return this.nombre;
    }
    setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    getApellido() {
        return this.apellido;
    }
    setApellido(nuevoApellido) {
        this.apellido = nuevoApellido;
    }
    getNumRegistro() {
        return this.numRegistro;
    }
    setNumRegistro(nuevoNum) {
        this.numRegistro = nuevoNum;
    }
    mostrarNombrePropietario() {
        return `${this.nombre} ${this.apellido}`;
    }
}
