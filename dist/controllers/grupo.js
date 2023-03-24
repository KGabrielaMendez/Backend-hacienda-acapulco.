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
exports.getGanadoEquinoList = exports.getGanadoBovinoList = exports.deleteGrupo = exports.putGrupo = exports.postGrupo = exports.getGrupo = exports.getGrupos = void 0;
const grupo_1 = __importDefault(require("../models/grupo"));
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("./../db/config"));
const getGrupos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const grupos = yield grupo_1.default.findAll();
        res.json(grupos);
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getGrupos = getGrupos;
const getGrupo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const grupo = yield grupo_1.default.findByPk(id);
        if (grupo) {
            res.json(grupo);
        }
        else {
            res.status(404).json({ msg: 'No existe grupo con el id: ' + id });
        }
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getGrupo = getGrupo;
const postGrupo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //guardar en base de datos
        const grupo = yield grupo_1.default.create(body);
        res.json(grupo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.postGrupo = postGrupo;
const putGrupo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const grupo = yield grupo_1.default.findByPk(id);
        if (!grupo) {
            return res.status(404).json({
                msg: 'No existe un grupo con el id: ' + id
            });
        }
        yield grupo.update(body);
        res.json(grupo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.putGrupo = putGrupo;
const deleteGrupo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const grupo = yield grupo_1.default.findByPk(id);
        if (!grupo) {
            return res.status(404).json({
                msg: 'No existe un grupo con el id: ' + id
            });
        }
        yield grupo.destroy();
        ;
        res.json({ grupo });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.deleteGrupo = deleteGrupo;
const getGanadoBovinoList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const datosgrupos = yield config_1.default.query("select  g.id, g.arete_gan, g.tipo_gan, g.estado, g.fechanac_gan, g.sexo_gan, gr.nombre_gru, r.nombre_ra , g.nombre_gan, id_raza, id_grupo ,observacion_gan from ganado g, grupo gr,raza r WHERE gr.id=g.id_grupo and g.id_raza= r.id and estado=1 and g.tipo_gan='bovino'", {
            nest: true,
            type: sequelize_1.QueryTypes.SELECT
        });
        res.json(datosgrupos);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: err
        });
    }
});
exports.getGanadoBovinoList = getGanadoBovinoList;
const getGanadoEquinoList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const datosgrupos = yield config_1.default.query("select  g.id, g.arete_gan, g.tipo_gan, g.estado, g.fechanac_gan, g.sexo_gan, gr.nombre_gru, r.nombre_ra , g.nombre_gan, id_raza, id_grupo ,observacion_gan from ganado g, grupo gr,raza r WHERE gr.id=g.id_grupo and g.id_raza= r.id and estado=1 and g.tipo_gan='equino'", {
            nest: true,
            type: sequelize_1.QueryTypes.SELECT
        });
        res.json(datosgrupos);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: err
        });
    }
});
exports.getGanadoEquinoList = getGanadoEquinoList;
//# sourceMappingURL=grupo.js.map