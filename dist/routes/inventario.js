"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inventario_1 = require("../controllers/inventario");
'../controllers/inventario';
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.get('/', [validar_jwt_1.validarJWT], inventario_1.getInventario);
router.get('/:id', [validar_jwt_1.validarJWT], inventario_1.getDetallesInventario);
router.post('/', [validar_jwt_1.validarJWT], inventario_1.postEntrada);
//router.put('/:id',    putComerciante);
//router.delete('/:id', deleteComerciante);
exports.default = router;
//# sourceMappingURL=inventario.js.map