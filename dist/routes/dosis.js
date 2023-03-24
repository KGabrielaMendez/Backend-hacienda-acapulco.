"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dosis_1 = require("../controllers/dosis");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.get('/', [validar_jwt_1.validarJWT], dosis_1.getDosis);
router.post('/', [validar_jwt_1.validarJWT], dosis_1.postDosis);
router.put('/:id', [validar_jwt_1.validarJWT], dosis_1.putDosis);
router.delete('/:id', [validar_jwt_1.validarJWT], dosis_1.deleteDosis);
exports.default = router;
//# sourceMappingURL=dosis.js.map