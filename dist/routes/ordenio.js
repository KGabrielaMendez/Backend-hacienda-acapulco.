"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ordenio_1 = require("../controllers/ordenio");
const router = (0, express_1.Router)();
router.get('/', ordenio_1.getOrdenios);
router.get('/:id', ordenio_1.getOrdenio);
router.post('/', ordenio_1.postOrdenio);
router.put('/:id', ordenio_1.putOrdenio);
router.delete('/:id', ordenio_1.deleteOrdenio);
exports.default = router;
//# sourceMappingURL=ordenio.js.map