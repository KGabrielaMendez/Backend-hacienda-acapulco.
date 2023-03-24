"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ocupacion_1 = require("../controllers/ocupacion");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.get('/', [validar_jwt_1.validarJWT], ocupacion_1.getOcupaciones);
router.get('/:id', [validar_jwt_1.validarJWT], ocupacion_1.getOcupacion);
router.post('/', [validar_jwt_1.validarJWT], ocupacion_1.postOcupacion);
router.put('/:id', [validar_jwt_1.validarJWT], ocupacion_1.putOcupacion);
router.delete('/:id', [validar_jwt_1.validarJWT], ocupacion_1.deleteOcupacion);
exports.default = router;
//# sourceMappingURL=ocupacion.js.map