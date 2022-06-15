"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const ganado_1 = __importDefault(require("./ganado"));
const Pesaje = config_1.default.define('Pesaje', {
    fecha_pesaje: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    observacion_pesaje: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: null
    }
});
ganado_1.default.hasMany(Pesaje, { foreignKey: 'id_gan' });
Pesaje.belongsTo(ganado_1.default, { foreignKey: 'id_gan' });
exports.default = Pesaje;
//# sourceMappingURL=pesaje.js.map