"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportesGanado_1 = require("../controllers/reportesGanado");
const reportesInventario_1 = require("../controllers/reportesInventario");
const reportesUsuarios_1 = require("../controllers/reportesUsuarios");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
//ganado
router.get('/torosVenta/:fecha_inicio/:fecha_fin', [validar_jwt_1.validarJWT], reportesGanado_1.getTorosVenta);
router.get('/torosVentaAnio/:fecha', [validar_jwt_1.validarJWT], reportesGanado_1.getTorosVentaAnio);
router.get('/ValoresPendientesFechas/:fecha_inicio/:fecha_fin', [validar_jwt_1.validarJWT], reportesGanado_1.getPendientesFechas);
router.get('/ganadoVendido/:fecha_inicio/:fecha_fin', [validar_jwt_1.validarJWT], reportesGanado_1.getGanadoVendido);
router.get('/descarteGanado/:fecha_inicio/:fecha_fin', [validar_jwt_1.validarJWT], reportesGanado_1.getDescarteGanado);
router.get('/ganadoEquino/:fecha_inicio/:fecha_fin', [validar_jwt_1.validarJWT], reportesGanado_1.getGanadoEquino);
//inventario
router.get('/proximoExpirar/:mes', [validar_jwt_1.validarJWT], reportesInventario_1.getProximoExpirar);
router.get('/expirado/', [validar_jwt_1.validarJWT], reportesInventario_1.getExpirado);
router.get('/ingresosRecientes/:fecha', [validar_jwt_1.validarJWT], reportesInventario_1.getIngresosRecientes);
//usuarios
router.get('/aniosServicio', [validar_jwt_1.validarJWT], reportesUsuarios_1.getAniosServicio);
router.get('/edadEmpleados', [validar_jwt_1.validarJWT], reportesUsuarios_1.getEdad);
exports.default = router;
//# sourceMappingURL=reportes.js.map