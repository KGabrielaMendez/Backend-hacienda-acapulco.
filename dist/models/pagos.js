"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const negociacion_1 = __importDefault(require("./negociacion"));
const usuario_1 = __importDefault(require("./usuario"));
const Pagos = config_1.default.define('pagos_negociacion', {
    cantidad: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
    }
});
negociacion_1.default.hasMany(Pagos, { foreignKey: 'id_negociacion' });
Pagos.belongsTo(negociacion_1.default, { foreignKey: 'id_negociacion' });
usuario_1.default.hasMany(Pagos, { foreignKey: 'id_usuario' });
Pagos.belongsTo(usuario_1.default, { foreignKey: 'id_usuario' });
exports.default = Pagos;
//# sourceMappingURL=pagos.js.map