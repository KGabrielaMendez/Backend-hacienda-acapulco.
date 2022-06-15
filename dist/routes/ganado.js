"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ganado_1 = require("../controllers/ganado");
const router = (0, express_1.Router)();
router.get('/', ganado_1.getGanados);
router.get('/:id', ganado_1.getGanado);
router.post('/', ganado_1.postGanado);
router.put('/:id', ganado_1.putGanado);
router.delete('/:id', ganado_1.deleteGanado);
exports.default = router;
//# sourceMappingURL=ganado.js.map