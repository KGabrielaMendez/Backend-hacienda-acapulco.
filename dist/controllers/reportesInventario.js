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
exports.getIngresosRecientes = exports.getExpirado = exports.getProximoExpirar = void 0;
const config_1 = __importDefault(require("../db/config"));
const sequelize_1 = require("sequelize");
//Toros Listos para la venta
const getProximoExpirar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { mes } = req.params;
    try {
        const salidas = yield config_1.default.query("select e.id, e.id_pro, lote, p.nombre_pro, fechaexp, cantidad from entrada e, productos p where e.id_pro=p.id and month(fechaexp)<=(month(curdate())+($1)) and year(fechaexp) = year(curdate())", {
            bind: [mes],
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
exports.getProximoExpirar = getProximoExpirar;
const getExpirado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salidas = yield config_1.default.query(" select e.id, e.id_pro, lote, p.nombre_pro, fechaexp, cantidad from entrada e, productos p where e.id_pro=p.id and fechaexp<= curdate() ", {
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
exports.getExpirado = getExpirado;
const getIngresosRecientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fecha } = req.params;
    try {
        const salidas = yield config_1.default.query("      select e.*, p.nombre_pro from entrada e, productos p where e.id_pro = p.id and fecha_entrada>=($1) ", {
            bind: [fecha],
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
exports.getIngresosRecientes = getIngresosRecientes;
//# sourceMappingURL=reportesInventario.js.map