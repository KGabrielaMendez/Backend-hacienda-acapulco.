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
exports.deleteSalida = exports.putSalida = exports.postSalida = exports.getSalida = exports.getSalidas = void 0;
const salida_1 = __importDefault(require("./../models/salida"));
const getSalidas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salidas = yield salida_1.default.findAll();
        res.json(salidas);
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getSalidas = getSalidas;
const getSalida = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const salida = yield salida_1.default.findByPk(id);
        if (salida) {
            res.json(salida);
        }
        else {
            res.status(404).json({ msg: 'No existe salida con el id: ' + id });
        }
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getSalida = getSalida;
const postSalida = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //guardar en base de datos
        const salida = yield salida_1.default.create(body);
        res.json(salida);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.postSalida = postSalida;
const putSalida = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const salida = yield salida_1.default.findByPk(id);
        if (!salida) {
            return res.status(404).json({
                msg: 'No existe una salida con el id: ' + id
            });
        }
        yield salida.update(body);
        res.json(salida);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.putSalida = putSalida;
const deleteSalida = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const salida = yield salida_1.default.findByPk(id);
        if (!salida) {
            return res.status(404).json({
                msg: 'No existe un salida con el id: ' + id
            });
        }
        yield salida.update({ estado: false });
        res.json({ salida });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.deleteSalida = deleteSalida;
//# sourceMappingURL=salida.js.map