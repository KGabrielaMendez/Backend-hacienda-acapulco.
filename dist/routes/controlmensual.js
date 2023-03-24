"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlmensual_1 = require("../controllers/controlmensual");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.get('/', [validar_jwt_1.validarJWT], controlmensual_1.getControlMensuales);
router.get('/:id', [validar_jwt_1.validarJWT], controlmensual_1.getControlMensual);
router.post('/', [validar_jwt_1.validarJWT], controlmensual_1.postControlMensual);
router.put('/:id', controlmensual_1.putControlMensual);
router.delete('/:id', controlmensual_1.deleteControlMensual);
exports.default = router;
//# sourceMappingURL=controlmensual.js.map