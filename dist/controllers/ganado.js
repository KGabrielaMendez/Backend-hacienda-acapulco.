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
exports.deleteGanado = exports.putGanado = exports.postGanado = exports.getGanado = exports.getGanados = void 0;
const ganado_1 = __importDefault(require("./../models/ganado"));
const getGanados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ganado = yield ganado_1.default.findAll();
        res.json(ganado);
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getGanados = getGanados;
const getGanado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const ganado = yield ganado_1.default.findByPk(id);
        if (ganado) {
            res.json(ganado);
        }
        else {
            res.status(404).json({ msg: 'No existe ganado con el id: ' + id });
        }
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getGanado = getGanado;
const postGanado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //guardar en base de datos
        const ganado = yield ganado_1.default.create(body);
        res.json(ganado);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.postGanado = postGanado;
const putGanado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const ganado = yield ganado_1.default.findByPk(id);
        if (!ganado) {
            return res.status(404).json({
                msg: 'No existe un ganado con el id: ' + id
            });
        }
        yield ganado.update(body);
        res.json(ganado);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.putGanado = putGanado;
const deleteGanado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const ganado = yield ganado_1.default.findByPk(id);
        if (!ganado) {
            return res.status(404).json({
                msg: 'No existe un ganado con el id: ' + id
            });
        }
        yield ganado.update({ estado: false });
        res.json({ ganado });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.deleteGanado = deleteGanado;
//# sourceMappingURL=ganado.js.map