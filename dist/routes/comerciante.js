"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comerciante_1 = require("../controllers/comerciante");
const router = (0, express_1.Router)();
router.get('/', comerciante_1.getComerciantes);
router.get('/:id', comerciante_1.getComerciante);
router.post('/', comerciante_1.postComerciante);
router.put('/:id', comerciante_1.putComerciante);
router.delete('/:id', comerciante_1.deleteComerciante);
exports.default = router;
//# sourceMappingURL=comerciante.js.map