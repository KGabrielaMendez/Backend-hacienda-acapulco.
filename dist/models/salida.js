"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const entrada_1 = __importDefault(require("./entrada"));
const usuario_1 = __importDefault(require("./usuario"));
const Salida = config_1.default.define('Salida', {
    fecha_salida: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    observacion: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: null,
    },
    //foraneas
    //id_entrada
    //id_personal
});
entrada_1.default.hasMany(Salida, { foreignKey: 'id_entrada' });
Salida.belongsTo(entrada_1.default, { foreignKey: 'id_entrada' });
usuario_1.default.hasMany(Salida, { foreignKey: 'id_usuario' });
Salida.belongsTo(usuario_1.default, { foreignKey: 'id_usuario' });
exports.default = Salida;
//# sourceMappingURL=salida.js.map