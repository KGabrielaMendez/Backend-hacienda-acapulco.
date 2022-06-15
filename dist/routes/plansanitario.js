"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const plansanitario_1 = require("../controllers/plansanitario");
const router = (0, express_1.Router)();
router.get('/', plansanitario_1.getPlansanitarios);
router.get('/:id', plansanitario_1.getPlansanitario);
router.post('/', plansanitario_1.postPlansanitario);
router.put('/:id', plansanitario_1.putPlansanitario);
router.delete('/:id', plansanitario_1.deletePlansanitario);
exports.default = router;
//# sourceMappingURL=plansanitario.js.map