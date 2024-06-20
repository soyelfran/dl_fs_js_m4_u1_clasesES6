import Cliente from "./Cliente.js";
import Impuestos from "./Impuestos.js";

const impuestosFran = new Impuestos(750000, 130000);

const impuestosJen = new Impuestos(850000, 150000);

const clienteFran = new Cliente("Fran Lizana");
clienteFran.impuesto = impuestosFran;

const clienteJen = new Cliente("Jen Olivares");
clienteJen.impuesto = impuestosJen;

const clientes = [clienteFran, clienteJen];
clientes.forEach((cliente) => {
  console.log(`Cliente: ${cliente.nombre}`);
  console.log(`Impuesto anual: ${cliente.calcularImpuesto()}`);
});
