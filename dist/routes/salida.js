"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const salida_1 = require("../controllers/salida");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.get('/', [validar_jwt_1.validarJWT], salida_1.getSalidas);
router.get('/:id', [validar_jwt_1.validarJWT], salida_1.getSalida);
router.post('/', [validar_jwt_1.validarJWT], salida_1.postSalida);
router.put('/:id', [validar_jwt_1.validarJWT], salida_1.putSalida);
router.delete('/:id', [validar_jwt_1.validarJWT], salida_1.deleteSalida);
exports.default = router;
//# sourceMappingURL=salida.js.map