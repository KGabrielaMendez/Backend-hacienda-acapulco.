"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const grupo_1 = __importDefault(require("./grupo"));
const Plansanitario = config_1.default.define('plan_sanitario', {
    fecha_ps: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    descripcion_ps: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    observacion_pesaje: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: null
    },
    prox_vacuna: {
        type: sequelize_1.DataTypes.DATEONLY,
        defaultValue: null
    },
});
grupo_1.default.hasMany(Plansanitario, { foreignKey: 'id_gru' });
Plansanitario.belongsTo(grupo_1.default, { foreignKey: 'id_gru' });
exports.default = Plansanitario;
//# sourceMappingURL=plansanitario.js.map