"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ganado_1 = require("../controllers/ganado");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.get('/', [validar_jwt_1.validarJWT], ganado_1.getGanados);
router.get('/:id', [validar_jwt_1.validarJWT], ganado_1.getGanado);
router.post('/', [validar_jwt_1.validarJWT], ganado_1.postGanado);
router.put('/:id', [validar_jwt_1.validarJWT], ganado_1.putGanado);
router.delete('/:id', [validar_jwt_1.validarJWT], ganado_1.deleteGanado);
exports.default = router;
//# sourceMappingURL=ganado.js.map