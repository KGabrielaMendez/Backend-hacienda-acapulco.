"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const Grupo = config_1.default.define('Grupo', {
    nombre_gru: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
exports.default = Grupo;
//# sourceMappingURL=grupo.js.map