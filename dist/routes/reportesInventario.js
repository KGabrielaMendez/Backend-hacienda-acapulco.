"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportesGanado_1 = require("../controllers/reportesGanado");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.get('/torosVenta/:fecha_inicio/:fecha_fin', [validar_jwt_1.validarJWT], reportesGanado_1.getTorosVenta);
router.get('/torosVentaAnio/:fecha', [validar_jwt_1.validarJWT], reportesGanado_1.getTorosVentaAnio);
//router.get('/:id',    [validarJWT], getRol);
//router.post('/',     [validarJWT],  postRol);
//router.put('/:id',    [validarJWT], putRol);
//router.delete('/:id', deleteRol);
exports.default = router;
//select e.id, e.id_pro, lote, p.nombre_pro, fechaexp, cantidad from entrada e, productos p where e.id_pro=p.id and month(fechaexp)<=(month(fechaexp)+3) and year(fechaexp) = year(curdate())
//# sourceMappingURL=reportesInventario.js.map