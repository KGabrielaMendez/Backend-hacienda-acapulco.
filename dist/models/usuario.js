"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const ocupacion_1 = __importDefault(require("./ocupacion"));
const rol_1 = __importDefault(require("./rol"));
const Usuario = config_1.default.define('Usuarios', {
    nombre_usr: {
        type: sequelize_1.DataTypes.STRING,
    },
    apellido_usr: {
        type: sequelize_1.DataTypes.STRING,
    },
    nombre_completo: {
        type: sequelize_1.DataTypes.STRING,
    },
    genero_usr: {
        type: sequelize_1.DataTypes.STRING,
        values: ['masculino', 'femenino', 'otro']
    },
    telefono_usr: {
        type: sequelize_1.DataTypes.STRING,
    },
    cedula_usr: {
        type: sequelize_1.DataTypes.STRING,
    },
    direccion_usr: {
        type: sequelize_1.DataTypes.STRING,
    },
    email_usr: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            isEmail: true,
        }
    },
    fecha_nac_usr: {
        type: sequelize_1.DataTypes.DATEONLY,
        validate: {
            isBefore: "2002-01-01",
        }
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.STRING,
    },
});
//foreign keys
ocupacion_1.default.hasMany(Usuario, { foreignKey: 'id_ocupacion' });
Usuario.belongsTo(ocupacion_1.default, { foreignKey: 'id_ocupacion' });
rol_1.default.hasMany(Usuario, { foreignKey: 'id_rol' });
Usuario.belongsTo(rol_1.default, { foreignKey: 'id_rol' });
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map