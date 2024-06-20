"use strict";

var _Cliente = _interopRequireDefault(require("./Cliente.js"));
var _Impuestos = _interopRequireDefault(require("./Impuestos.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var impuestosFran = new _Impuestos["default"](750000, 130000);
var impuestosJen = new _Impuestos["default"](850000, 150000);
var clienteFran = new _Cliente["default"]("Fran Lizana");
clienteFran.impuesto = impuestosFran;
var clienteJen = new _Cliente["default"]("Jen Olivares");
clienteJen.impuesto = impuestosJen;
var clientes = [clienteFran, clienteJen];
clientes.forEach(function (cliente) {
  console.log("Cliente: ".concat(cliente.nombre));
  console.log("Impuesto anual: ".concat(cliente.calcularImpuesto()));
});