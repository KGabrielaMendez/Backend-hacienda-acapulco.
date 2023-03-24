"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const entrada_1 = require("../controllers/entrada");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.get('/', [validar_jwt_1.validarJWT], entrada_1.getEntradas);
router.get('/:id', [validar_jwt_1.validarJWT], entrada_1.getEntrada);
router.post('/', [validar_jwt_1.validarJWT], entrada_1.postEntrada);
router.put('/:id', [validar_jwt_1.validarJWT], entrada_1.putEntrada);
router.delete('/:id', [validar_jwt_1.validarJWT], entrada_1.deleteEntrada);
exports.default = router;
//# sourceMappingURL=entrada.js.map