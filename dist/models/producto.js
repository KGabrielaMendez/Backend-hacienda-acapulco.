"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
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
    udM: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: 1,
    }
});
exports.default = Producto;
//# sourceMappingURL=producto.js.map