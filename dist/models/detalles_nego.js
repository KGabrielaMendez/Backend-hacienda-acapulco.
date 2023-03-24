"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const ganado_1 = __importDefault(require("./ganado"));
const negociacion_1 = __importDefault(require("./negociacion"));
const DetallesNegociacion = config_1.default.define('detalle_negociacion', {
    observaciones_det_neg: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    peso_kg: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    precio_libra: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
    },
    peso_libras: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: true,
    },
    precio_total: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: true,
    }
});
negociacion_1.default.hasMany(DetallesNegociacion, { foreignKey: 'id_negociacion' });
DetallesNegociacion.belongsTo(negociacion_1.default, { foreignKey: 'id_negociacion' });
ganado_1.default.hasMany(DetallesNegociacion, { foreignKey: 'id_ganado' });
DetallesNegociacion.belongsTo(ganado_1.default, { foreignKey: 'id_ganado' });
exports.default = DetallesNegociacion;
//# sourceMappingURL=detalles_nego.js.map