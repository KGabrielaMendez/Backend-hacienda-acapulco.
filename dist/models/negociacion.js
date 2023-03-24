"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const comerciante_1 = __importDefault(require("./comerciante"));
const Negociacion = config_1.default.define('negociacion_ganado', {
    tipo_negociacion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fecha_negociacion: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    precio_negociacion: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: true,
    },
    estado_negociacion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    valores_pagados: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: true,
    },
    valores_pendientes_nego: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: true,
    },
    destare: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: true,
    },
    subtotal: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: true,
    },
    total_kilos: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    }
});
comerciante_1.default.hasMany(Negociacion, { foreignKey: 'id_comerciante' });
Negociacion.belongsTo(comerciante_1.default, { foreignKey: 'id_comerciante' });
exports.default = Negociacion;
//# sourceMappingURL=negociacion.js.map