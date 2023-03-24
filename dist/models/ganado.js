"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const grupo_1 = __importDefault(require("./grupo"));
const grupo_2 = __importDefault(require("./grupo"));
const Ganado = config_1.default.define('Ganado', {
    tipo_gan: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: ['bovino', 'equino'],
    },
    arete_gan: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    nombre_gan: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    fechanac_gan: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    sexo_gan: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    observacion_gan: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: null,
    },
    motivodesc_gan: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: null,
    },
    fechadesc_gan: {
        type: sequelize_1.DataTypes.DATEONLY,
        defaultValue: null,
    },
});
grupo_2.default.hasMany(Ganado, { foreignKey: 'id_raza' });
Ganado.belongsTo(grupo_2.default, { foreignKey: 'id_raza' });
grupo_1.default.hasMany(Ganado, { foreignKey: 'id_grupo' });
Ganado.belongsTo(grupo_1.default, { foreignKey: 'id_grupo' });
exports.default = Ganado;
//# sourceMappingURL=ganado.js.map