"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlmensual_1 = require("../controllers/controlmensual");
const router = (0, express_1.Router)();
router.get('/', controlmensual_1.getControlMensuales);
router.get('/:id', controlmensual_1.getControlMensual);
router.post('/', controlmensual_1.postControlMensual);
router.put('/:id', controlmensual_1.putControlMensual);
router.delete('/:id', controlmensual_1.deleteControlMensual);
exports.default = router;
//# sourceMappingURL=controlmensual.js.map