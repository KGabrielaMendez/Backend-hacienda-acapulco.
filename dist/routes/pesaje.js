"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pesaje_1 = require("../controllers/pesaje");
const router = (0, express_1.Router)();
router.get('/', pesaje_1.getPesajes);
router.get('/:id', pesaje_1.getPesaje);
router.post('/', pesaje_1.postPesaje);
router.put('/:id', pesaje_1.putPesaje);
router.delete('/:id', pesaje_1.deletePesaje);
exports.default = router;
//# sourceMappingURL=pesaje.js.map