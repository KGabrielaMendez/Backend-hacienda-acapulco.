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
exports.deleteDosis = exports.putDosis = exports.postDosis = exports.getDosis = void 0;
const dosis_1 = __importDefault(require("./../models/dosis"));
const getDosis = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dosis = yield dosis_1.default.findAll();
        res.json(dosis);
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getDosis = getDosis;
const postDosis = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //guardar en base de datos
        const dosis = yield dosis_1.default.create(body);
        res.json(dosis);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.postDosis = postDosis;
const putDosis = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const dosis = yield dosis_1.default.findByPk(id);
        if (!dosis) {
            return res.status(404).json({
                msg: 'No existe un dosis con el id: ' + id
            });
        }
        yield dosis.update(body);
        res.json(dosis);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.putDosis = putDosis;
const deleteDosis = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const dosis = yield dosis_1.default.findByPk(id);
        if (!dosis) {
            return res.status(404).json({
                msg: 'No existe un dosis con el id: ' + id
            });
        }
        yield dosis.destroy();
        res.json({ dosis });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.deleteDosis = deleteDosis;
//# sourceMappingURL=dosis.js.map