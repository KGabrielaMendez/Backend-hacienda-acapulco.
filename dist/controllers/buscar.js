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
const ganado_1 = __importDefault(require("./../models/ganado"));
const coleccionesPermitidas = [
    'ganado',
    'grupo',
    'raza',
];
const buscarProbando = (termino = '', res) => __awaiter(void 0, void 0, void 0, function* () {
    const ganado = yield ganado_1.default.findByPk(termino);
    return res.json({
        results: (ganado) ? [ganado] : [],
    });
});
const buscar = (req, res) => {
    const { coleccion, termino } = req.params;
    if (!coleccionesPermitidas.includes(coleccion)) {
        return res.status(400).json({
            msg: `Las colecciones permitidas son: ${coleccionesPermitidas}`
        });
    }
    switch (coleccion) {
        case 'ganado':
            buscarProbando(termino, res);
            break;
        case 'grupo':
            break;
        case 'raza':
            break;
        default:
            res.status(500).json({
                msg: 'Se le olvido hacer esta busqueda'
            });
    }
};
exports.default = buscar;
//# sourceMappingURL=buscar.js.map