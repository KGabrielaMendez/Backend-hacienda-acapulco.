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
exports.deletePesaje = exports.putPesaje = exports.postPesaje = exports.getPesaje = exports.getPesajes = void 0;
const pesaje_1 = __importDefault(require("../models/pesaje"));
const getPesajes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pesajes = yield pesaje_1.default.findAll();
        res.json(pesajes);
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getPesajes = getPesajes;
const getPesaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const pesaje = yield pesaje_1.default.findByPk(id);
        if (pesaje) {
            res.json(pesaje);
        }
        else {
            res.status(404).json({ msg: 'No existe pesaje con el id: ' + id });
        }
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getPesaje = getPesaje;
const postPesaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //guardar en base de datos
        const pesaje = yield pesaje_1.default.create(body);
        res.json(pesaje);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.postPesaje = postPesaje;
const putPesaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const pesaje = yield pesaje_1.default.findByPk(id);
        if (!pesaje) {
            return res.status(404).json({
                msg: 'No existe un pesaje con el id: ' + id
            });
        }
        yield pesaje.update(body);
        res.json(pesaje);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.putPesaje = putPesaje;
const deletePesaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const pesaje = yield pesaje_1.default.findByPk(id);
        if (!pesaje) {
            return res.status(404).json({
                msg: 'No existe un pesaje con el id: ' + id
            });
        }
        yield pesaje.update({ estado: false });
        res.json({ pesaje });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.deletePesaje = deletePesaje;
//# sourceMappingURL=pesaje.js.map