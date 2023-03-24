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
exports.findByGroup = void 0;
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const findByGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { grupo } = req.params;
    console.log('esto--------------------------', grupo);
    try {
        const datosgrupos = yield config_1.default.query("SELECT Ga.arete_gan, Ga.tipo_gan, Ga.fechanac_gan, Ga.sexo_gan, R.nombre_ra, observacion_gan FROM Ganado Ga, Grupo Gr, Raza R WHERE Ga.id_grupo = Gr.id and Ga.id_raza= R.id and Gr.nombre_gru= $1", {
            bind: [grupo],
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
exports.findByGroup = findByGroup;
//# sourceMappingURL=consultasGanado.js.map