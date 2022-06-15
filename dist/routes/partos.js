"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const partos_1 = require("../controllers/partos");
const router = (0, express_1.Router)();
router.get('/', partos_1.getPartos);
router.get('/:id', partos_1.getParto);
router.post('/', partos_1.postParto);
router.put('/:id', partos_1.putParto);
router.delete('/:id', partos_1.deleteParto);
exports.default = router;
//# sourceMappingURL=partos.js.map