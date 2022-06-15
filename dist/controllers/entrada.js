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
exports.deleteEntrada = exports.putEntrada = exports.postEntrada = exports.getEntrada = exports.getEntradas = void 0;
const entrada_1 = __importDefault(require("./../models/entrada"));
const getEntradas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const entradas = yield entrada_1.default.findAll();
        res.json(entradas);
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getEntradas = getEntradas;
const getEntrada = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const entrada = yield entrada_1.default.findByPk(id);
        if (entrada) {
            res.json(entrada);
        }
        else {
            res.status(404).json({ msg: 'No existe entrada con el id: ' + id });
        }
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getEntrada = getEntrada;
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
const putEntrada = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const entrada = yield entrada_1.default.findByPk(id);
        if (!entrada) {
            return res.status(404).json({
                msg: 'No existe un entrada con el id: ' + id
            });
        }
        yield entrada.update(body);
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
exports.putEntrada = putEntrada;
const deleteEntrada = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const entrada = yield entrada_1.default.findByPk(id);
        if (!entrada) {
            return res.status(404).json({
                msg: 'No existe un entrada con el id: ' + id
            });
        }
        yield entrada.update({ estado: false });
        res.json({ entrada });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.deleteEntrada = deleteEntrada;
//# sourceMappingURL=entrada.js.map