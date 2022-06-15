"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const salida_1 = require("../controllers/salida");
const router = (0, express_1.Router)();
router.get('/', salida_1.getSalidas);
router.get('/:id', salida_1.getSalida);
router.post('/', salida_1.postSalida);
router.put('/:id', salida_1.putSalida);
router.delete('/:id', salida_1.deleteSalida);
exports.default = router;
//# sourceMappingURL=salida.js.map