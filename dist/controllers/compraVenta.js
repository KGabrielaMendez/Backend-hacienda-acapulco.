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
exports.getPagos = exports.postPagos = exports.getDetailVenta = exports.putVenta = exports.getNegociacion = exports.postVenta = exports.getVentaGanado = void 0;
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("./../db/config"));
const negociacion_1 = __importDefault(require("../models/negociacion"));
const pagos_1 = __importDefault(require("../models/pagos"));
const getVentaGanado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const compraventa = yield config_1.default.query("select n.*, c.nombre_com ,c.telefono_com from comerciante c, negociacion_ganado n where c.id=n.id_comerciante ", {
            nest: true,
            type: sequelize_1.QueryTypes.SELECT
        });
        res.json(compraventa);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: err
        });
    }
});
exports.getVentaGanado = getVentaGanado;
const postVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //guardar en base de datos
        const grupo = yield negociacion_1.default.create(body);
        res.json(grupo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Error 500 hable con el administrador ${res.status}`,
            error: error
        });
    }
});
exports.postVenta = postVenta;
const getNegociacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const compraventa = yield config_1.default.query(`select n.*, c.nombre_com ,c.telefono_com from comerciante c, negociacion_ganado n where c.id=n.id_comerciante and n.id=$1`, {
            bind: [id],
            nest: true,
            type: sequelize_1.QueryTypes.SELECT
        });
        res.json(compraventa);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: err
        });
    }
});
exports.getNegociacion = getNegociacion;
const putVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const compraventa = yield negociacion_1.default.findByPk(id);
        if (!compraventa) {
            return res.status(404).json({
                msg: 'No existe un entrada con el id: ' + id
            });
        }
        yield compraventa.update(body);
        res.json(compraventa);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.putVenta = putVenta;
const getDetailVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const compraventa = yield config_1.default.query("select d.*,n.*,c.*,g.id,g.arete_gan,g.sexo_gan,g.id_raza,r.nombre_ra from detalle_negociacion d, negociacion_ganado n, ganado g, raza r, comerciante c where d.id_negociacion=n.id and g.id_raza = r.id and d.id_ganado = g.id and n.id_comerciante=c.id and n.id=$1", {
            bind: [id],
            nest: true,
            type: sequelize_1.QueryTypes.SELECT
        });
        res.json(compraventa);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: err
        });
    }
});
exports.getDetailVenta = getDetailVenta;
const postPagos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //guardar en base de datos
        const pago = yield pagos_1.default.create(body);
        res.json(pago);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Error 500 hable con el administrador ${res.status}`,
            error: error
        });
    }
});
exports.postPagos = postPagos;
const getPagos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const compraventa = yield config_1.default.query("select p.*, n.valores_pendientes_nego, n.precio_negociacion, u.nombre_completo from pagos_negociacion p, negociacion_ganado n, usuarios u where p.id_negociacion = n.id and p.id_usuario= u.id  and id_negociacion=($1)", {
            bind: [id],
            nest: true,
            type: sequelize_1.QueryTypes.SELECT
        });
        res.json(compraventa);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: err
        });
    }
});
exports.getPagos = getPagos;
/* export const postCompraVentaGanado = async (req: Request, res: Response) => {
    const { body } = req.body;
    try {
        const idCV = await sequelize.query(
            "INSERT INTO `bdd_acapulco`.`negociacion_ganado` (`tipo_negociacion`, `id_comerciante`, `fecha_negociacion`, `precio_negociacion`, `estado_negociacion`, `valores_pagados`) VALUES (?, ?, ?, ?, ?, ?); SELECT LAST_INSERT_ID();",
            {
                bind: [{estado:'0',motivodesc_gan:motivodesc_gan,fechadesc_gan:fechadesc_gan}],
                nest: true,
                type: QueryTypes.SELECT
            }
        );
        res.json(idCV);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: err
        });
    }
}
 */ 
//# sourceMappingURL=compraVenta.js.map