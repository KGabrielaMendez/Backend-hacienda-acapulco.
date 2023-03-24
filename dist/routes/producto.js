"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_1 = require("../controllers/producto");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.get('/', [validar_jwt_1.validarJWT], producto_1.getProductos);
router.get('/:id', [validar_jwt_1.validarJWT], producto_1.getProducto);
router.post('/', [validar_jwt_1.validarJWT], producto_1.postProducto);
router.put('/:id', [validar_jwt_1.validarJWT], producto_1.putProducto);
router.delete('/:id', [validar_jwt_1.validarJWT], producto_1.deleteProducto);
exports.default = router;
//# sourceMappingURL=producto.js.map