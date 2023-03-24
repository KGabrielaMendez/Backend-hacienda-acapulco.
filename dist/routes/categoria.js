"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const categoria_1 = require("./../controllers/categoria");
const router = (0, express_1.Router)();
router.get('/', [validar_jwt_1.validarJWT], categoria_1.getCategorias);
exports.default = router;
//# sourceMappingURL=categoria.js.map