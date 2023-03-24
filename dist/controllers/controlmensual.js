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
exports.deleteControlMensual = exports.putControlMensual = exports.postControlMensual = exports.getControlMensual = exports.getControlMensuales = void 0;
const controlMensual_1 = __importDefault(require("./../models/controlMensual"));
const config_1 = __importDefault(require("./../db/config"));
const sequelize_1 = require("sequelize");
const getControlMensuales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const preciolitro = 0.45;
    try {
        const controlMensuals = yield config_1.default.query("select id ,year(fecha_ord) as 'anio', monthname(fecha_ord) as 'mes' , sum(litros_ord) as 'litros_mes', concat('$ ',round((sum(litros_ord)*$1),2)) as 'cuenta_mes', fecha_ord  from ordenio group by extract(year_month from fecha_ord)", {
            bind: [preciolitro],
            nest: true,
            type: sequelize_1.QueryTypes.SELECT
        });
        res.json(controlMensuals);
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getControlMensuales = getControlMensuales;
const getControlMensual = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const controlMensual = yield controlMensual_1.default.findByPk(id);
        if (controlMensual) {
            res.json(controlMensual);
        }
        else {
            res.status(404).json({ msg: 'No existe controlMensual con el id: ' + id });
        }
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getControlMensual = getControlMensual;
const postControlMensual = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //guardar en base de datos
        const controlMensual = yield controlMensual_1.default.create(body);
        res.json(controlMensual);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.postControlMensual = postControlMensual;
const putControlMensual = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const controlMensual = yield controlMensual_1.default.findByPk(id);
        if (!controlMensual) {
            return res.status(404).json({
                msg: 'No existe un controlMensual con el id: ' + id
            });
        }
        yield controlMensual.update(body);
        res.json(controlMensual);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.putControlMensual = putControlMensual;
const deleteControlMensual = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const controlMensual = yield controlMensual_1.default.findByPk(id);
        if (!controlMensual) {
            return res.status(404).json({
                msg: 'No existe un controlMensual con el id: ' + id
            });
        }
        yield controlMensual.update({ estado: false });
        res.json({ controlMensual });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.deleteControlMensual = deleteControlMensual;
//# sourceMappingURL=controlmensual.js.map