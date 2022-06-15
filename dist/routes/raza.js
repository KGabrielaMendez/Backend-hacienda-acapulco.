"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const raza_1 = require("../controllers/raza");
const router = (0, express_1.Router)();
router.get('/', raza_1.getRazas);
router.get('/:id', raza_1.getRaza);
router.post('/', raza_1.postRaza);
router.put('/:id', raza_1.putRaza);
router.delete('/:id', raza_1.deleteRaza);
exports.default = router;
//# sourceMappingURL=raza.js.map