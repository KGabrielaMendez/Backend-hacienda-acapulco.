"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consultasGanado_1 = require("../controllers/consultasGanado");
const grupo_1 = require("../controllers/grupo");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
//obtener el listado de ganado con los nombres de las tablas relacionadas
router.get('/bovino', [validar_jwt_1.validarJWT], grupo_1.getGanadoBovinoList);
router.get('/equino', [validar_jwt_1.validarJWT], grupo_1.getGanadoEquinoList);
router.get('/:grupo', [validar_jwt_1.validarJWT], consultasGanado_1.findByGroup);
exports.default = router;
//# sourceMappingURL=consultasGanado.js.map