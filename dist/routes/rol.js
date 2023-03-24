"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roles_1 = require("../controllers/roles");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.get('/', [validar_jwt_1.validarJWT], roles_1.getRoles);
router.get('/:id', [validar_jwt_1.validarJWT], roles_1.getRol);
router.post('/', [validar_jwt_1.validarJWT], roles_1.postRol);
router.put('/:id', [validar_jwt_1.validarJWT], roles_1.putRol);
router.delete('/:id', roles_1.deleteRol);
exports.default = router;
//# sourceMappingURL=rol.js.map