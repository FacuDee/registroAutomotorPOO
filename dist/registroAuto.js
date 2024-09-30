export class RegistroAutomotor {
    constructor() {
        this.listaAutos = [];
        this.listaMotos = [];
        this.listaCamiones = [];
        this.listaPropietarios = [];
    }
    // Agregar y eliminar autos
    agregarAuto(auto) {
        this.listaAutos.push(auto);
    }
    eliminarAuto(patente) {
        this.listaAutos = this.listaAutos.filter((auto) => auto.getPatente() !== patente);
    }
    // Agregar y eliminar motos
    agregarMoto(moto) {
        this.listaMotos.push(moto);
    }
    eliminarMoto(patente) {
        this.listaMotos = this.listaMotos.filter((moto) => moto.getPatente() !== patente);
    }
    // Agregar y eliminar autos
    agregarCamion(camion) {
        this.listaCamiones.push(camion);
    }
    eliminarCamion(patente) {
        this.listaCamiones = this.listaCamiones.filter((camion) => camion.getPatente() !== patente);
    }
    // Agregar y eliminar propietarios
    agregarPropietario(propietario) {
        this.listaPropietarios.push(propietario);
    }
    eliminarPropietario(numRegistro) {
        this.listaPropietarios = this.listaPropietarios.filter((propietario) => propietario.getNumRegistro() !== numRegistro);
    }
    // Editar datos de los vehículos
    editarAuto(patente, nuevosDatos) {
        const auto = this.listaAutos.find((auto) => auto.getPatente() === patente);
        if (auto) {
            if (nuevosDatos.marca)
                auto.setMarca(nuevosDatos.marca);
            if (nuevosDatos.modelo)
                auto.setModelo(nuevosDatos.modelo);
            if (nuevosDatos.propietario)
                auto.setPropietario(nuevosDatos.propietario);
        }
        else {
            console.log(`No se encontró el auto con la patente ${patente}`);
        }
    }
    editarMoto(patente, nuevosDatos) {
        const moto = this.listaMotos.find((moto) => moto.getPatente() === patente);
        if (moto) {
            if (nuevosDatos.marca)
                moto.setMarca(nuevosDatos.marca);
            if (nuevosDatos.modelo)
                moto.setModelo(nuevosDatos.modelo);
            if (nuevosDatos.propietario)
                moto.setPropietario(nuevosDatos.propietario);
        }
        else {
            console.log(`No se encontró la moto con la patente ${patente}`);
        }
    }
    editarCamion(patente, nuevosDatos) {
        const camion = this.listaCamiones.find((camion) => camion.getPatente() === patente);
        if (camion) {
            if (nuevosDatos.marca)
                camion.setMarca(nuevosDatos.marca);
            if (nuevosDatos.modelo)
                camion.setModelo(nuevosDatos.modelo);
            if (nuevosDatos.propietario)
                camion.setPropietario(nuevosDatos.propietario);
        }
        else {
            console.log(`No se encontró el camión con la patente ${patente}`);
        }
    }
    // Muestra una tabla en el navegador con los datos del Registro Automotor
    mostrarDatos() {
        const container = document.querySelector(".container");
        if (container) {
            container.innerHTML = "";
            const automotoresTable = document.createElement("table");
            automotoresTable.innerHTML = `
        <thead>
          <tr>
            <th>Titular</th>
            <th>Tipo</th>
            <th>Patente</th>
            <th>Marca</th>
            <th>Modelo</th>
          </tr>
        </thead>
        <tbody>
          ${this.listaAutos
                .map((auto) => `
            <tr>
              <td><strong>${auto
                .getPropietario()
                .mostrarNombrePropietario()}</strong></td>
              <td>${auto.getTipo()}</td>
              <td>${auto.getPatente()}</td>
              <td>${auto.getMarca()}</td>
              <td>${auto.getModelo()}</td>
            </tr>`)
                .join("")}
            ${this.listaMotos
                .map((moto) => `
              <tr>
                <td><strong>${moto
                .getPropietario()
                .mostrarNombrePropietario()}</strong></td>
                <td>${moto.getTipo()}</td>
                <td>${moto.getPatente()}</td>
                <td>${moto.getMarca()}</td>
                <td>${moto.getModelo()}</td>
              </tr>`)
                .join("")}
              ${this.listaCamiones
                .map((camion) => `
                <tr>
                  <td><strong>${camion
                .getPropietario()
                .mostrarNombrePropietario()}</strong></td>
                  <td>${camion.getTipo()}</td>
                  <td>${camion.getPatente()}</td>
                  <td>${camion.getMarca()}</td>
                  <td>${camion.getModelo()}</td>
                </tr>`)
                .join("")}
        </tbody>
      `;
            container.appendChild(automotoresTable);
        }
    }
}
