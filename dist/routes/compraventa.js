"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const compraVenta_1 = require("../controllers/compraVenta");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_roles_1 = require("../middlewares/validar-roles");
const detalleVenta_1 = require("../controllers/detalleVenta");
const detalleCompra_1 = require("../controllers/detalleCompra");
const router = (0, express_1.Router)();
router.post('/compra', detalleCompra_1.postDetalleCompra);
router.get('/compra/:id', detalleCompra_1.getDetalleCompra);
router.get('/', [validar_jwt_1.validarJWT], compraVenta_1.getVentaGanado);
router.get('/getId', [validar_jwt_1.validarJWT], detalleVenta_1.getIdNegociacion); //obtener el id de negociacion
router.get('/:id', [validar_jwt_1.validarJWT], compraVenta_1.getDetailVenta);
router.put('/:id', [validar_jwt_1.validarJWT], compraVenta_1.putVenta);
router.post('/', [validar_jwt_1.validarJWT, validar_roles_1.esAdminRol], compraVenta_1.postVenta);
router.post('/detalle', [validar_jwt_1.validarJWT, validar_roles_1.esAdminRol], detalleVenta_1.postDetalleVenta);
router.get('/detalle/:id', [validar_jwt_1.validarJWT], detalleVenta_1.getDetalleVenta);
router.post('/pagos', [validar_jwt_1.validarJWT, validar_roles_1.esAdminRol], compraVenta_1.postPagos);
router.get('/pagos/:id', [validar_jwt_1.validarJWT, validar_roles_1.esAdminRol], compraVenta_1.getPagos);
exports.default = router;
//# sourceMappingURL=compraventa.js.map