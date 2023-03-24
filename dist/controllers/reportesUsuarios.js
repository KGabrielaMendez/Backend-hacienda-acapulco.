"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEdad = exports.getAniosServicio = void 0;
const config_1 = __importDefault(require("../db/config"));
const sequelize_1 = require("sequelize");
//Toros Listos para la venta
const getAniosServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const servicio = yield config_1.default.query("select u.id,nombre_completo, cedula_usr, o.ocupacion, (year(curdate())-  year(fecha_ingreso))as anios_servicio from usuarios u, ocupacion o where u.id_ocupacion=o.id and u.estado=1", {
            nest: true,
            type: sequelize_1.QueryTypes.SELECT
        });
        res.json(servicio);
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getAniosServicio = getAniosServicio;
const getEdad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salidas = yield config_1.default.query(" select u.id,nombre_completo, cedula_usr, o.ocupacion, (year(curdate())-  year(fecha_nac_usr))as edad from usuarios u, ocupacion o where u.id_ocupacion=o.id and u.estado=1", {
            nest: true,
            type: sequelize_1.QueryTypes.SELECT
        });
        res.json(salidas);
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getEdad = getEdad;
//# sourceMappingURL=reportesUsuarios.js.map