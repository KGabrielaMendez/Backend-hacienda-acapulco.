"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ocupacion_1 = require("../controllers/ocupacion");
const router = (0, express_1.Router)();
router.get('/', ocupacion_1.getOcupaciones);
router.get('/:id', ocupacion_1.getOcupacion);
router.post('/', ocupacion_1.postOcupacion);
router.put('/:id', ocupacion_1.putOcupacion);
router.delete('/:id', ocupacion_1.deleteOcupacion);
exports.default = router;
//# sourceMappingURL=ocupacion.js.map