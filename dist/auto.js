export class Auto {
    constructor(patente, marca, modelo, propietario) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.propietario = propietario;
    }
    getTipo() {
        return "Automóvil";
    }
    // Métodos para acceder a los atributos
    getPatente() {
        return this.patente;
    }
    setPatente(nuevaPatente) {
        this.patente = nuevaPatente;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(nuevaMarca) {
        this.marca = nuevaMarca;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(nuevoModelo) {
        this.modelo = nuevoModelo;
    }
    getPropietario() {
        return this.propietario;
    }
    setPropietario(nuevoPropietario) {
        this.propietario = nuevoPropietario;
    }
}
