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
exports.deleteOcupacion = exports.putOcupacion = exports.postOcupacion = exports.getOcupacion = exports.getOcupaciones = void 0;
const ocupacion_1 = __importDefault(require("./../models/ocupacion"));
const getOcupaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ocupacion = yield ocupacion_1.default.findAll();
        res.json(ocupacion);
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getOcupaciones = getOcupaciones;
const getOcupacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const ocupacion = yield ocupacion_1.default.findByPk(id);
        if (ocupacion) {
            res.json(ocupacion);
        }
        else {
            res.status(404).json({ msg: 'No existe ocupacion con el id: ' + id });
        }
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getOcupacion = getOcupacion;
const postOcupacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //guardar en base de datos
        const ocupacion = yield ocupacion_1.default.create(body);
        res.json(ocupacion);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.postOcupacion = postOcupacion;
const putOcupacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const ocupacion = yield ocupacion_1.default.findByPk(id);
        if (!ocupacion) {
            return res.status(404).json({
                msg: 'No existe un ocupacion con el id: ' + id
            });
        }
        yield ocupacion.update(body);
        res.json(ocupacion);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.putOcupacion = putOcupacion;
const deleteOcupacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const ocupacion = yield ocupacion_1.default.findByPk(id);
        if (!ocupacion) {
            return res.status(404).json({
                msg: 'No existe un ocupacion con el id: ' + id
            });
        }
        yield ocupacion.destroy();
        res.json({ ocupacion });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.deleteOcupacion = deleteOcupacion;
//# sourceMappingURL=ocupacion.js.map