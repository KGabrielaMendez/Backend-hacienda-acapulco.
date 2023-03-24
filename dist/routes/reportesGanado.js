"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportesGanado_1 = require("../controllers/reportesGanado");
const reportesInventario_1 = require("../controllers/reportesInventario");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.get('/torosVenta/:fecha_inicio/:fecha_fin', [validar_jwt_1.validarJWT], reportesGanado_1.getTorosVenta);
router.get('/torosVentaAnio/:fecha', [validar_jwt_1.validarJWT], reportesGanado_1.getTorosVentaAnio);
router.get('/proximoExpirar/:mes', [validar_jwt_1.validarJWT], reportesInventario_1.getProximoExpirar);
router.get('/expirado/', [validar_jwt_1.validarJWT], reportesInventario_1.getExpirado);
//router.get('/:id',    [validarJWT], getRol);
//router.post('/',     [validarJWT],  postRol);
//router.put('/:id',    [validarJWT], putRol);
//router.delete('/:id', deleteRol);
exports.default = router;
//# sourceMappingURL=reportesGanado.js.map