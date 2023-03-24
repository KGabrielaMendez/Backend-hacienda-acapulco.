"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comerciante_1 = require("../controllers/comerciante");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_roles_1 = require("../middlewares/validar-roles");
const router = (0, express_1.Router)();
router.get('/', [validar_jwt_1.validarJWT], comerciante_1.getComerciantes);
router.get('/:id', [validar_jwt_1.validarJWT], comerciante_1.getComerciante);
router.post('/', [validar_jwt_1.validarJWT, validar_roles_1.esAdminRol], comerciante_1.postComerciante);
router.put('/:id', [validar_jwt_1.validarJWT, validar_roles_1.esAdminRol], comerciante_1.putComerciante);
router.delete('/:id', [validar_jwt_1.validarJWT], comerciante_1.deleteComerciante);
exports.default = router;
//# sourceMappingURL=comerciante.js.map