"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const ControlMensual = config_1.default.define('ControlMensual', {
    fecha: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    litros_mensuales: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
    },
    precio_litro: {
        type: sequelize_1.DataTypes.DECIMAL,
    },
    pago_mensual: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
    },
    estado: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: true,
    },
    //foraneas
    /**
     *  id_raza
     * id_grupo
     * */
});
exports.default = ControlMensual;
//# sourceMappingURL=controlMensual.js.map