"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const producto_1 = __importDefault(require("../models/producto"));
const entrada_1 = __importDefault(require("./../models/entrada"));
producto_1.default.hasMany(entrada_1.default, { foreignKey: 'id_producto' });
entrada_1.default.belongsTo(producto_1.default);
exports.default = {
    Producto: producto_1.default,
    Entrada: entrada_1.default
};
//# sourceMappingURL=indexDB.js.map