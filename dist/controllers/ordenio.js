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
exports.deleteOrdenio = exports.putOrdenio = exports.postOrdenio = exports.getOrdenio = exports.getOrdeniosFindAll = exports.getOrdenios = void 0;
const ordenio_1 = __importDefault(require("../models/ordenio"));
const config_1 = __importDefault(require("../db/config"));
const sequelize_1 = require("sequelize");
const getOrdenios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ordenios = yield config_1.default.query("select id , DATE_FORMAT(fecha_ord,'%d - %b - %Y') as 'Fecha' , litros_ord as 'Litros Totales'  from ordenio ;", {
            nest: true,
            type: sequelize_1.QueryTypes.SELECT
        });
        res.json(ordenios);
    }
    catch (err) {
        res.status(500).json({
            msg: "error a traer los datos de la base",
            error: err
        });
    }
});
exports.getOrdenios = getOrdenios;
const getOrdeniosFindAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ordenios = yield ordenio_1.default.findAll();
        res.json(ordenios);
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getOrdeniosFindAll = getOrdeniosFindAll;
const getOrdenio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const ordenio = yield ordenio_1.default.findByPk(id);
        if (ordenio) {
            res.json(ordenio);
        }
        else {
            res.status(404).json({ msg: 'No existe ordenio con el id: ' + id });
        }
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getOrdenio = getOrdenio;
const postOrdenio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //guardar en base de datos
        const ordenio = yield ordenio_1.default.create(body);
        res.json(ordenio);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.postOrdenio = postOrdenio;
const putOrdenio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const ordenio = yield ordenio_1.default.findByPk(id);
        if (!ordenio) {
            return res.status(404).json({
                msg: 'No existe un ordenio con el id: ' + id
            });
        }
        yield ordenio.update(body);
        res.json(ordenio);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.putOrdenio = putOrdenio;
const deleteOrdenio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const ordenio = yield ordenio_1.default.findByPk(id);
        if (!ordenio) {
            return res.status(404).json({
                msg: 'No existe un ordenio con el id: ' + id
            });
        }
        yield ordenio.update({ estado: false });
        res.json({ ordenio });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.deleteOrdenio = deleteOrdenio;
//# sourceMappingURL=ordenio.js.map