"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const plansanitario_1 = require("../controllers/plansanitario");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.get('/', [validar_jwt_1.validarJWT], plansanitario_1.getPlansanitarios);
router.get('/:fecha', [validar_jwt_1.validarJWT], plansanitario_1.getPlansanitario);
router.post('/', [validar_jwt_1.validarJWT], plansanitario_1.postPlansanitario);
router.put('/:id', [validar_jwt_1.validarJWT], plansanitario_1.putPlansanitario);
router.delete('/:id', [validar_jwt_1.validarJWT], plansanitario_1.deletePlansanitario);
exports.default = router;
//# sourceMappingURL=plansanitario.js.map