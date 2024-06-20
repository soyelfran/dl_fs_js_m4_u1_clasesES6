"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Impuestos = _interopRequireDefault(require("./Impuestos.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Cliente = exports["default"] = /*#__PURE__*/function () {
  function Cliente(nombre) {
    _classCallCheck(this, Cliente);
    this._nombre = nombre;
    this._impuesto = null;
  }
  return _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(value) {
      this._nombre = value;
    }
  }, {
    key: "impuesto",
    get: function get() {
      return this._impuesto;
    },
    set: function set(value) {
      if (value instanceof _Impuestos["default"]) {
        this._impuesto = value;
      } else {
        throw new Error("El objeto no es una instancia de la clase Impuestos");
      }
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      if (this._impuesto) {
        var _this$_impuesto = this._impuesto,
          montoBrutoAnual = _this$_impuesto.montoBrutoAnual,
          deducciones = _this$_impuesto.deducciones;
        return (montoBrutoAnual - deducciones) * 0.21;
      }
      return 0;
    }
  }, {
    key: "calcularImpuestoTotal",
    value: function calcularImpuestoTotal() {
      return this.calcularImpuesto();
    }
  }]);
}();