import { RegistroAutomotor } from "./registroAuto.js";
import { Propietario } from "./propietario.js";
import { Auto } from "./auto.js";
import { Moto } from "./moto.js";
import { Camion } from "./camion.js";

// Instanciar el Registro Automotor
const registro = new RegistroAutomotor();

// Instanciar propietarios
const propietario1 = new Propietario("Juan José", "Pérez", 1);
const propietario2 = new Propietario("Ana", "García", 2);
const propietario3 = new Propietario("Carlos Miguel", "Arroyo", 3);
const propietario4 = new Propietario("María Laura", "Fernández", 4);
const propietario5 = new Propietario("Luis", "Goñi", 5);
const propietario6 = new Propietario("María", "Peralta", 6);
const propietario7 = new Propietario("Ernesto", "Sosa", 7);

// Agregar los propietarios al registro
registro.agregarPropietario(propietario1);
registro.agregarPropietario(propietario2);
registro.agregarPropietario(propietario3);
registro.agregarPropietario(propietario4);
registro.agregarPropietario(propietario5);
registro.agregarPropietario(propietario6);

// Instanciar vehículos (autos, motos y camiones)
const auto1 = new Auto("AXZ650", "Toyota", 2022, propietario1);
const moto1 = new Moto("OPQ889", "Zanella", 2021, propietario2);
const camion1 = new Camion("KLO887", "Iveco", 2016, propietario3);
const auto2 = new Auto("HGT657", "Peugeot", 2019, propietario4);
const moto2 = new Moto("TYU655", "Honda", 2023, propietario5);
const camion2 = new Camion("KOP909", "Nissan", 2022, propietario6);

// Agregar los vehículos al registro
registro.agregarAuto(auto1);
registro.agregarAuto(auto2);
registro.agregarMoto(moto1);
registro.agregarMoto(moto2);
registro.agregarCamion(camion1);
registro.agregarCamion(camion2);

// Modificar datos de prueba
auto1.setModelo(1998);
moto2.setPropietario(propietario7);
propietario1.setApellido("Gómez");
propietario2.setNumRegistro(202);

// Mostrar datos en la consola
console.log(registro);

// Mostrar datos en el navegador
registro.mostrarDatos();
