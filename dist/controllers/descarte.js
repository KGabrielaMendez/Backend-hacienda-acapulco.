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
exports.DescartesGanado = exports.putDescarteGanado = void 0;
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const putDescarteGanado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { estado, motivodesc_gan, fechadesc_gan } = req.body;
    console.log(motivodesc_gan, "----------------------------------------");
    try {
        const results = yield config_1.default.query("UPDATE ganado SET estado=?, motivodesc_gan = ?, fechadesc_gan = ? WHERE id = ?", {
            bind: [{ estado: '0', motivodesc_gan: motivodesc_gan, fechadesc_gan: fechadesc_gan }],
            nest: true,
            type: sequelize_1.QueryTypes.SELECT
        });
        console.log(results, '--metadata-- ');
        // res.json(results);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'hable con el administrador...',
            error: error
        });
    }
});
exports.putDescarteGanado = putDescarteGanado;
const DescartesGanado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const datosgrupos = yield config_1.default.query("SELECT `id`,`arete_gan`,`nombre_gan`,`estado`, `motivodesc_gan`, `fechadesc_gan` from ganado", {
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
exports.DescartesGanado = DescartesGanado;
//# sourceMappingURL=descarte.js.map