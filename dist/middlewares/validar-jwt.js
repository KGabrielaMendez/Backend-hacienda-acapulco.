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
exports.validarJWT = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const jwt = require('jsonwebtoken');
const validarJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header('x-token');
    console.log(token);
    if (!token) {
        return res.status(401).json({
            message: 'Necesita Iniciar Sesión para acceder a la información',
        });
    }
    try {
        const { id } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        // leer el usuario que corresponde al uid
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            return res.status(401).json({
                message: 'Token no válido - usuario no existe DB'
            });
        }
        // Verificar si el uid tiene estado true
        //    if ( !usuario.estado ) {
        //     return res.status(401).json({
        //         msg: 'Token no válido - usuario con estado: false'
        //     })
        // }
        req.usuario = usuario;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            message: 'Token no válido'
        });
    }
});
exports.validarJWT = validarJWT;
//# sourceMappingURL=validar-jwt.js.map