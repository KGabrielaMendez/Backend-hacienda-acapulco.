"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validarJWT = require('./validar-jwt');
const validar_roles_1 = require("./validar-roles");
exports.default = Object.assign(Object.assign(Object.assign({}, validarJWT), validar_roles_1.esAdminRol), validar_roles_1.tieneRol);
//# sourceMappingURL=index.js.map