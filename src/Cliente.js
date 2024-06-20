import Impuestos from "./Impuestos.js";

export default class Cliente {
  constructor(nombre) {
    this._nombre = nombre;
    this._impuesto = null;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(value) {
    this._nombre = value;
  }

  get impuesto() {
    return this._impuesto;
  }

  set impuesto(value) {
    if (value instanceof Impuestos) {
      this._impuesto = value;
    } else {
      throw new Error("El objeto no es una instancia de la clase Impuestos");
    }
  }

  calcularImpuesto() {
    if (this._impuesto) {
      const { montoBrutoAnual, deducciones } = this._impuesto;
      return (montoBrutoAnual - deducciones) * 0.21;
    }
    return 0;
  }

  calcularImpuestoTotal() {
    return this.calcularImpuesto();
  }
}
