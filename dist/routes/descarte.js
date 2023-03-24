"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const descarte_1 = require("../controllers/descarte");
const validar_roles_1 = require("../middlewares/validar-roles");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
//obtener el listado de ganado con los nombres de las tablas relacionadas
router.get('/', [validar_jwt_1.validarJWT], descarte_1.DescartesGanado);
router.put('/:id', [validar_jwt_1.validarJWT, validar_roles_1.esAdminRol], descarte_1.putDescarteGanado);
exports.default = router;
//# sourceMappingURL=descarte.js.map