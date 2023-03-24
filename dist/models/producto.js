"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const categoria_1 = __importDefault(require("./categoria"));
const Producto = config_1.default.define('Productos', {
    nombre_pro: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    descripcion_pro: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    categoria_pro: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: 1,
    }
});
categoria_1.default.hasMany(Producto, { foreignKey: 'id_raza' });
Producto.belongsTo(categoria_1.default, { foreignKey: 'id_raza' });
exports.default = Producto;
//# sourceMappingURL=producto.js.map