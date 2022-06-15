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
exports.deleteRol = exports.putRol = exports.postRol = exports.getRol = exports.getRoles = void 0;
const rol_1 = __importDefault(require("./../models/rol"));
const getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rol = yield rol_1.default.findAll();
        res.json(rol);
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getRoles = getRoles;
const getRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const rol = yield rol_1.default.findByPk(id);
        if (rol) {
            res.json(rol);
        }
        else {
            res.status(404).json({ msg: 'No existe rol con el id: ' + id });
        }
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getRol = getRol;
const postRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //guardar en base de datos
        const rol = yield rol_1.default.create(body);
        res.json(rol);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.postRol = postRol;
const putRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const rol = yield rol_1.default.findByPk(id);
        if (!rol) {
            return res.status(404).json({
                msg: 'No existe un rol con el id: ' + id
            });
        }
        yield rol.update(body);
        res.json(rol);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.putRol = putRol;
const deleteRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const rol = yield rol_1.default.findByPk(id);
        if (!rol) {
            return res.status(404).json({
                msg: 'No existe un rol con el id: ' + id
            });
        }
        yield rol.destroy();
        res.json({ rol });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.deleteRol = deleteRol;
//# sourceMappingURL=roles.js.map