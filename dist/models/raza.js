"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const Raza = config_1.default.define('Raza', {
    nombre_ra: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
exports.default = Raza;
//# sourceMappingURL=raza.js.map