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
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = exports.getEmpleados = void 0;
const usuario_1 = __importDefault(require("./../models/usuario"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const config_1 = __importDefault(require("./../db/config"));
const sequelize_1 = require("sequelize");
const getEmpleados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield config_1.default.query("select u.id, nombre_usr, apellido_usr, nombre_completo, genero_usr,telefono_usr,cedula_usr,direccion_usr,email_usr,fecha_nac_usr, usuario, o.ocupacion, id_ocupacion, u.estado from usuarios u inner join ocupacion o where u.estado =true and o.id=u.id_ocupacion", {
            nest: true,
            type: sequelize_1.QueryTypes.SELECT
        });
        res.json(usuarios);
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getEmpleados = getEmpleados;
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield config_1.default.query("select u.id, nombre_completo,email_usr, usuario, o.ocupacion, id_ocupacion, u.estado, u.id_rol, r.tipo_rol , password from usuarios u inner join ocupacion o inner join roles r where u.estado =true and o.id=u.id_ocupacion and usuario is not null and u.id_rol=r.id", {
            nest: true,
            type: sequelize_1.QueryTypes.SELECT
        });
        res.json(usuarios);
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (usuario) {
            res.json(usuario);
        }
        else {
            res.status(404).json({ msg: 'No existe usuario con el id: ' + id });
        }
    }
    catch (err) {
        res.json({
            msg: err,
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //verificar que el email no exista
        if (!body.email_usr) {
            const existeEmail = yield usuario_1.default.findOne({
                where: {
                    email_usr: body.email_usr
                }
            });
            if (existeEmail) {
                return res.status(400).json({
                    msg: 'Ya existe un usuario con el email: ' + body.email_usr
                });
            }
        }
        //encriptar contraseña 
        const salt = bcryptjs_1.default.genSaltSync();
        if (body.password) {
            body.password = bcryptjs_1.default.hashSync(body.password, salt);
        }
        //guardar en base de datos
        const usuario = yield usuario_1.default.create(body);
        res.json(usuario);
    }
    catch (errors) {
        console.log("= ", errors, "este es el error");
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: errors
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    console.log('------------putuser', body);
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id: ' + id
            });
        }
        else {
            const salt = bcryptjs_1.default.genSaltSync();
            if (body.password) {
                body.password = bcryptjs_1.default.hashSync(body.password, salt);
            }
            yield usuario.update(body);
            res.json(usuario);
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id: ' + id
            });
        }
        yield usuario.update({ estado: false });
        const usuarioAutenticado = req.usuario;
        res.json({ usuario, usuarioAutenticado });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map