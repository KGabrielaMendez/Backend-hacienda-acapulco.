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
exports.getIdNegociacion = exports.postDetalleCompraVenta = exports.getDetalleCompraVenta = void 0;
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("./../db/config"));
const detalles_nego_1 = __importDefault(require("../models/detalles_nego"));
const getDetalleCompraVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const compraventa = yield config_1.default.query("select d.*, g.arete_gan from detalle_negociacion d, ganado g where d.id_ganado = g.id and id_negociacion=($1)", {
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
exports.getDetalleCompraVenta = getDetalleCompraVenta;
const postDetalleCompraVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //guardar en base de datos
        const grupo = yield detalles_nego_1.default.create(body);
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
exports.postDetalleCompraVenta = postDetalleCompraVenta;
const getIdNegociacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const compraventa = yield config_1.default.query("SELECT MAX(id) AS id FROM negociacion_ganado", {
            nest: true,
            type: sequelize_1.QueryTypes.SELECT
        });
        res.json(compraventa);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'hable con el administrador ',
            error: err
        });
    }
});
exports.getIdNegociacion = getIdNegociacion;
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
//# sourceMappingURL=detalleComprayVenta.js.map