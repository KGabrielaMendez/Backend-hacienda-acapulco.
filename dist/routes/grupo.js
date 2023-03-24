"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const grupo_1 = require("../controllers/grupo");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.get('/', [validar_jwt_1.validarJWT], grupo_1.getGrupos);
router.get('/:id', [validar_jwt_1.validarJWT], grupo_1.getGrupo);
router.post('/', [validar_jwt_1.validarJWT], grupo_1.postGrupo);
router.put('/:id', [validar_jwt_1.validarJWT], grupo_1.putGrupo);
router.delete('/:id', [validar_jwt_1.validarJWT], grupo_1.deleteGrupo);
exports.default = router;
//# sourceMappingURL=grupo.js.map