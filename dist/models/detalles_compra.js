"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const negociacion_1 = __importDefault(require("./negociacion"));
const DetallesCompra = config_1.default.define('detalle_compra', {
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    tipo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    fecha_nac: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
    },
    precio_unitario: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: true,
    }
});
negociacion_1.default.hasMany(DetallesCompra, { foreignKey: 'id_nego' });
DetallesCompra.belongsTo(negociacion_1.default, { foreignKey: 'id_nego' });
exports.default = DetallesCompra;
//# sourceMappingURL=detalles_compra.js.map