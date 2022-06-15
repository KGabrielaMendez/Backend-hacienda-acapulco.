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
exports.deleteComerciante = exports.putComerciante = exports.postComerciante = exports.getComerciante = exports.getComerciantes = void 0;
const comerciante_1 = __importDefault(require("./../models/comerciante"));
const getComerciantes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comerciantes = yield comerciante_1.default.findAll();
        res.json(comerciantes);
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getComerciantes = getComerciantes;
const getComerciante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const comerciante = yield comerciante_1.default.findByPk(id);
        if (comerciante) {
            res.json(comerciante);
        }
        else {
            res.status(404).json({ msg: 'No existe comerciante con el id: ' + id });
        }
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getComerciante = getComerciante;
const postComerciante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //guardar en base de datos
        const comerciante = yield comerciante_1.default.create(body);
        res.json(comerciante);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.postComerciante = postComerciante;
const putComerciante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const comerciante = yield comerciante_1.default.findByPk(id);
        if (!comerciante) {
            return res.status(404).json({
                msg: 'No existe un comerciante con el id: ' + id
            });
        }
        yield comerciante.update(body);
        res.json(comerciante);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.putComerciante = putComerciante;
const deleteComerciante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const comerciante = yield comerciante_1.default.findByPk(id);
        if (!comerciante) {
            return res.status(404).json({
                msg: 'No existe un comerciante con el id: ' + id
            });
        }
        yield comerciante.update({ estado: false });
        res.json({ comerciante });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.deleteComerciante = deleteComerciante;
//# sourceMappingURL=comerciante.js.map