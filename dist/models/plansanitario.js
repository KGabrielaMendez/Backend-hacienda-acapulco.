"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const dosis_1 = __importDefault(require("./dosis"));
const ganado_1 = __importDefault(require("./ganado"));
const grupo_1 = __importDefault(require("./grupo"));
const Plansanitario = config_1.default.define('plan_sanitario', {
    fecha_inicio: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    descripcion_ps: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
grupo_1.default.hasMany(Plansanitario, { foreignKey: 'id_gru' });
Plansanitario.belongsTo(grupo_1.default, { foreignKey: 'id_gru' });
ganado_1.default.hasMany(Plansanitario, { foreignKey: 'id_ganado' });
Plansanitario.belongsTo(ganado_1.default, { foreignKey: 'id_ganado' });
dosis_1.default.hasMany(Plansanitario, { foreignKey: 'id_dosis' });
Plansanitario.belongsTo(dosis_1.default, { foreignKey: 'id_dosis' });
exports.default = Plansanitario;
//# sourceMappingURL=plansanitario.js.map