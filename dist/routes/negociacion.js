"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const compraVenta_1 = require("./../controllers/compraVenta");
const router = (0, express_1.Router)();
router.get('/:id', [validar_jwt_1.validarJWT], compraVenta_1.getNegociacion);
exports.default = router;
//# sourceMappingURL=negociacion.js.map