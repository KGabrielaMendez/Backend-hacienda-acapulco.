"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_roles_1 = require("../middlewares/validar-roles");
const router = (0, express_1.Router)();
router.get('/usuarios', [validar_jwt_1.validarJWT, validar_roles_1.esAdminRol], usuarios_1.getUsuarios);
router.get('/', [validar_jwt_1.validarJWT, validar_roles_1.esAdminRol], usuarios_1.getEmpleados);
router.get('/:id', [validar_jwt_1.validarJWT, validar_roles_1.esAdminRol], usuarios_1.getUsuario);
router.post('/', [validar_jwt_1.validarJWT, validar_roles_1.esAdminRol], usuarios_1.postUsuario);
router.put('/:id', usuarios_1.putUsuario);
router.delete('/:id', [validar_jwt_1.validarJWT, validar_roles_1.esAdminRol], usuarios_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map