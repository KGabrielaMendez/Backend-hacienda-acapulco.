"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ordenio_1 = require("../controllers/ordenio");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.get('/', [
    validar_jwt_1.validarJWT,
    //esAdminRol,
    //tieneRol('1','3'),
], ordenio_1.getOrdenios);
router.get('/:fecha', [validar_jwt_1.validarJWT], ordenio_1.getOrdeniosByDate);
router.post('/', [validar_jwt_1.validarJWT], ordenio_1.postOrdenio);
router.put('/:id', [validar_jwt_1.validarJWT], ordenio_1.putOrdenio);
router.delete('/:id', [validar_jwt_1.validarJWT], ordenio_1.deleteOrdenio);
exports.default = router;
//# sourceMappingURL=ordenio.js.map