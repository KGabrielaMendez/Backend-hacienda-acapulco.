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
Object.defineProperty(exports, "__esModule", { value: true });
exports.tieneRol = exports.esAdminRol = void 0;
const esAdminRol = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.usuario) {
        return res.status(500).json({
            message: 'Se quiere verificar el rol sin validar el token primero'
        });
    }
    const { id_rol, nombre_completo } = req.usuario;
    console.error(id_rol);
    //1 - admin : 2 - user : 3 - employee
    if (id_rol !== 1) {
        return res.status(401).json({
            message: `${nombre_completo} no es administrador`
        });
    }
    else {
        next();
    }
});
exports.esAdminRol = esAdminRol;
const tieneRol = (...roles) => {
    return (req, res, next) => {
        if (!req.usuario) {
            return res.status(500).json({
                message: 'Se quiere verificar el rol sin validar el token'
            });
        }
        if (!roles.includes(req.usuario.rol)) {
            return res.status(404).json({
                message: `el servicio requiere rol de admin o employee`
            });
        }
        next();
    };
};
exports.tieneRol = tieneRol;
//# sourceMappingURL=validar-roles.js.map