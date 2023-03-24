"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const Comerciante = config_1.default.define('Comerciante', {
    nombre_com: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ruc_com: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    direccion_com: {
        type: sequelize_1.DataTypes.STRING,
    },
    telefono_com: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: true,
    },
});
exports.default = Comerciante;
//# sourceMappingURL=comerciante.js.map