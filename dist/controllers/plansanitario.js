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
exports.deletePlansanitario = exports.putPlansanitario = exports.postPlansanitario = exports.getPlansanitario = exports.getPlansanitarios = void 0;
const plansanitario_1 = __importDefault(require("../models/plansanitario"));
const config_1 = __importDefault(require("../db/config"));
const sequelize_1 = require("sequelize");
const getPlansanitarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const datosplanS = yield config_1.default.query("SELECT p.id , d.id as id_dosis,dosis,id_gru,gr.nombre_gru,id_ganado,id_dosis,fecha_inicio,descripcion_ps,p.estado FROM plan_sanitario p inner join dosis d , grupo gr where p.id_dosis = d.id and id_gru = gr.id order by fecha_inicio desc", {
            nest: true,
            type: sequelize_1.QueryTypes.SELECT
        });
        res.json(datosplanS);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "error en la obtención de datos, Hable con el admin",
            error: error
        });
    }
});
exports.getPlansanitarios = getPlansanitarios;
const getPlansanitario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fecha } = req.params;
    try {
        const plansanitario = yield config_1.default.query("SELECT p.id , d.id as id_dosis,dosis,id_gru,gr.nombre_gru,id_ganado,id_dosis,fecha_inicio,descripcion_ps,p.estado FROM plan_sanitario p inner join dosis d , grupo gr where p.id_dosis = d.id and id_gru = gr.id and p.estado=($1) order by fecha_inicio desc ", {
            bind: [fecha],
            nest: true,
            type: sequelize_1.QueryTypes.SELECT
        });
        res.json(plansanitario);
    }
    catch (err) {
        res.status(500).json({
            message: "error a traer los datos de la base",
            error: err
        });
    }
});
exports.getPlansanitario = getPlansanitario;
const postPlansanitario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //guardar en base de datos
        const plansanitario = yield plansanitario_1.default.create(body);
        res.json(plansanitario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.postPlansanitario = postPlansanitario;
const putPlansanitario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const plansanitario = yield plansanitario_1.default.findByPk(id);
        if (!plansanitario) {
            return res.status(404).json({
                msg: 'No existe un plansanitario con el id: ' + id
            });
        }
        yield plansanitario.update(body);
        res.json(plansanitario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.putPlansanitario = putPlansanitario;
const deletePlansanitario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const plansanitario = yield plansanitario_1.default.findByPk(id);
        if (!plansanitario) {
            return res.status(404).json({
                msg: 'No existe un plansanitario con el id: ' + id
            });
        }
        yield plansanitario.update({ estado: false });
        res.json({ plansanitario });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.deletePlansanitario = deletePlansanitario;
//# sourceMappingURL=plansanitario.js.map