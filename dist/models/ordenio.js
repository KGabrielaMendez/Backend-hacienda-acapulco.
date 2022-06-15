"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const Ordenio = config_1.default.define('Ordenio', {
    fecha_ord: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    litros_ord: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
    },
    numerovacas_ord: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    observacion_ord: {
        type: sequelize_1.DataTypes.STRING,
    },
});
exports.default = Ordenio;
//# sourceMappingURL=ordenio.js.map