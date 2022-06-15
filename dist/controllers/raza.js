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
exports.deleteRaza = exports.putRaza = exports.postRaza = exports.getRaza = exports.getRazas = void 0;
const raza_1 = __importDefault(require("../models/raza"));
const getRazas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const razas = yield raza_1.default.findAll();
        res.json(razas);
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getRazas = getRazas;
const getRaza = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const raza = yield raza_1.default.findByPk(id);
        if (raza) {
            res.json(raza);
        }
        else {
            res.status(404).json({ msg: 'No existe raza con el id: ' + id });
        }
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getRaza = getRaza;
const postRaza = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //guardar en base de datos
        const raza = yield raza_1.default.create(body);
        res.json(raza);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.postRaza = postRaza;
const putRaza = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const raza = yield raza_1.default.findByPk(id);
        if (!raza) {
            return res.status(404).json({
                msg: 'No existe un raza con el id: ' + id
            });
        }
        yield raza.update(body);
        res.json(raza);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.putRaza = putRaza;
const deleteRaza = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const raza = yield raza_1.default.findByPk(id);
        if (!raza) {
            return res.status(404).json({
                msg: 'No existe un raza con el id: ' + id
            });
        }
        yield raza.destroy();
        ;
        res.json({ raza });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.deleteRaza = deleteRaza;
//# sourceMappingURL=raza.js.map