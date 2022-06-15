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
exports.deleteParto = exports.putParto = exports.postParto = exports.getParto = exports.getPartos = void 0;
const parto_1 = __importDefault(require("../models/parto"));
const getPartos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const partos = yield parto_1.default.findAll();
        res.json(partos);
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getPartos = getPartos;
const getParto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const parto = yield parto_1.default.findByPk(id);
        if (parto) {
            res.json(parto);
        }
        else {
            res.status(404).json({ msg: 'No existe parto con el id: ' + id });
        }
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getParto = getParto;
const postParto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //guardar en base de datos
        const parto = yield parto_1.default.create(body);
        res.json(parto);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.postParto = postParto;
const putParto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const parto = yield parto_1.default.findByPk(id);
        if (!parto) {
            return res.status(404).json({
                msg: 'No existe un parto con el id: ' + id
            });
        }
        yield parto.update(body);
        res.json(parto);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.putParto = putParto;
const deleteParto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const parto = yield parto_1.default.findByPk(id);
        if (!parto) {
            return res.status(404).json({
                msg: 'No existe un parto con el id: ' + id
            });
        }
        yield parto.update({ estado: false });
        res.json({ parto });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.deleteParto = deleteParto;
//# sourceMappingURL=partos.js.map