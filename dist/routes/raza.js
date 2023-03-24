"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const raza_1 = require("../controllers/raza");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.get('/', [validar_jwt_1.validarJWT], raza_1.getRazas);
router.get('/:id', [validar_jwt_1.validarJWT], raza_1.getRaza);
router.post('/', [validar_jwt_1.validarJWT], raza_1.postRaza);
router.put('/:id', [validar_jwt_1.validarJWT], raza_1.putRaza);
router.delete('/:id', [validar_jwt_1.validarJWT], raza_1.deleteRaza);
exports.default = router;
//# sourceMappingURL=raza.js.map