"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const ganado_1 = __importDefault(require("./ganado"));
const raza_1 = __importDefault(require("./raza"));
const Parto = config_1.default.define('Partos', {
    tipo_gan: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: ['bovino', 'equino']
    },
    fecha_pa: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
    },
    sexocria_pa: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    estadocria_pa: {
        type: sequelize_1.DataTypes.STRING,
    },
    numarete_cria: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: null
    },
    nombre_gan: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: null
    },
    observacion_pa: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: null
    }
});
ganado_1.default.hasMany(Parto, { foreignKey: 'id_gan' });
Parto.belongsTo(ganado_1.default, { foreignKey: 'id_gan' });
raza_1.default.hasMany(Parto, { foreignKey: 'id_raza' });
Parto.belongsTo(raza_1.default, { foreignKey: 'id_raza' });
exports.default = Parto;
//# sourceMappingURL=parto.js.map