"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const entrada_1 = require("../controllers/entrada");
const router = (0, express_1.Router)();
router.get('/', entrada_1.getEntradas);
router.get('/:id', entrada_1.getEntrada);
router.post('/', entrada_1.postEntrada);
router.put('/:id', entrada_1.putEntrada);
router.delete('/:id', entrada_1.deleteEntrada);
exports.default = router;
//# sourceMappingURL=entrada.js.map