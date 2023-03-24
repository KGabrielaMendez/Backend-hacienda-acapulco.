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
exports.postEntrada = exports.getDetallesInventario = exports.getInventario = void 0;
const config_1 = __importDefault(require("./../db/config"));
const sequelize_1 = require("sequelize");
const entrada_1 = __importDefault(require("../models/entrada"));
const getInventario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inventario = yield config_1.default.query("select e.id, e.id_pro, p.nombre_pro, sum(e.cantidad ) as cantidad, p.id_categoria, c.nombre as categoria_pro from entrada e , productos p, categoria c where e.id_pro = p.id and p.id_categoria=c.id group by (e.id_pro)", {
            nest: true,
            type: sequelize_1.QueryTypes.SELECT
        });
        res.json(inventario);
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getInventario = getInventario;
//obtener detalles de las entradas de un producto
const getDetallesInventario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const inventario = yield config_1.default.query("select id,cantidad,fecha_entrada, fechaexp,id_pro,lote,observacion  from entrada where id_pro=$1 order by fechaexp", {
            bind: [id],
            type: sequelize_1.QueryTypes.SELECT
        });
        res.json(inventario);
    }
    catch (err) {
        res.json({
            msg: `Hay un error ${err}`,
        });
    }
});
exports.getDetallesInventario = getDetallesInventario;
// agregar entrada de un producto
const postEntrada = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //guardar en base de datos
        const entrada = yield entrada_1.default.create(body);
        res.json(entrada);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.postEntrada = postEntrada;
//# sourceMappingURL=inventario.js.map