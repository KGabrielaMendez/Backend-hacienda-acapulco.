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
exports.getGanadoEquino = exports.getDescarteGanado = exports.getGanadoVendido = exports.getPendientesFechas = exports.getPendientesMes = exports.getTorosVentaAnio = exports.getTorosVenta = void 0;
const config_1 = __importDefault(require("../db/config"));
const sequelize_1 = require("sequelize");
//Toros Listos para la venta
const getTorosVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fecha_inicio, fecha_fin } = req.params;
    try {
        const salidas = yield config_1.default.query("select arete_gan, fechanac_gan, r.nombre_ra,gr.nombre_gru from ganado G, raza r, grupo gr where r.id=G.id_raza and gr.id=g.id_grupo and sexo_gan='macho' and tipo_gan='bovino' and fechanac_gan>= ($1) and fechanac_gan<= ($2) and estado= 1", {
            bind: [fecha_inicio, fecha_fin],
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
exports.getTorosVenta = getTorosVenta;
const getTorosVentaAnio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fecha } = req.params;
    try {
        const salidas = yield config_1.default.query("    select arete_gan, fechanac_gan, r.nombre_ra,gr.nombre_gru from ganado G, raza r, grupo gr where r.id=G.id_raza and gr.id=g.id_grupo and sexo_gan='macho' and tipo_gan='bovino' and year(fechanac_gan)= ($1) and estado= 1", {
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
exports.getTorosVentaAnio = getTorosVentaAnio;
const getPendientesMes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fecha } = req.params;
    try {
        const salidas = yield config_1.default.query("select N.fecha_negociacion,C.nombre_com,C.telefono_com,C.direccion_com, N.valores_pendientes_nego from negociacion_ganado N INNER JOIN comerciante C on (N.id_comerciante=C.id) where estado_negociacion = 'pendiente' and month(fecha_negociacion)>=month($1) and year(fecha_negociacion)=year($1)", {
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
exports.getPendientesMes = getPendientesMes;
const getPendientesFechas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fecha_inicio, fecha_fin } = req.params;
    try {
        const salidas = yield config_1.default.query("select N.fecha_negociacion,C.nombre_com,C.telefono_com,C.direccion_com, N.valores_pendientes_nego from negociacion_ganado N INNER JOIN comerciante C on (N.id_comerciante=C.id) where estado_negociacion = 'pendiente' and fecha_negociacion>=($1) and fecha_negociacion<=($2)", {
            bind: [fecha_inicio, fecha_fin],
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
exports.getPendientesFechas = getPendientesFechas;
const getGanadoVendido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fecha_inicio, fecha_fin } = req.params;
    try {
        const salidas = yield config_1.default.query("select * from ganado where motivodesc_gan='vendido' and fechadesc_gan>=($1) and fechadesc_gan<=($2)", {
            bind: [fecha_inicio, fecha_fin],
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
exports.getGanadoVendido = getGanadoVendido;
const getDescarteGanado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fecha_inicio, fecha_fin } = req.params;
    try {
        const salidas = yield config_1.default.query("select * from ganado where motivodesc_gan!='vendido' and fechadesc_gan>=($1) and fechadesc_gan<=($2)", {
            bind: [fecha_inicio, fecha_fin],
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
exports.getDescarteGanado = getDescarteGanado;
const getGanadoEquino = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fecha_inicio, fecha_fin } = req.params;
    try {
        const salidas = yield config_1.default.query("select * from ganado where tipo_gan='equino' and estado=1 and fechanac_gan>=($1) and fechanac_gan<=($2)", {
            bind: [fecha_inicio, fecha_fin],
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
exports.getGanadoEquino = getGanadoEquino;
//# sourceMappingURL=reportesGanado.js.map