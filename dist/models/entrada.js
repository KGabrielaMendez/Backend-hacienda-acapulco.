"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const producto_1 = __importDefault(require("./producto"));
const Entrada = config_1.default.define('Entrada', {
    fecha_entrada: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    fechaexp: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: true,
    },
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    lote: {
        type: sequelize_1.DataTypes.STRING,
    },
    observacion: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: null,
    },
    //foraneas
});
producto_1.default.hasMany(Entrada, { foreignKey: 'id_pro' });
Entrada.belongsTo(producto_1.default, { foreignKey: 'id_pro' });
// Entrada.Producto = Entrada.belongsTo(Producto);
// const Producto = sequelize.define('Producto', {foreignKey: 'id_producto'})
exports.default = Entrada;
//# sourceMappingURL=entrada.js.map