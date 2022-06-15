"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const grupo_1 = require("../controllers/grupo");
const router = (0, express_1.Router)();
router.get('/', grupo_1.getGrupos);
router.get('/:id', grupo_1.getGrupo);
router.post('/', grupo_1.postGrupo);
router.put('/:id', grupo_1.putGrupo);
router.delete('/:id', grupo_1.deleteGrupo);
exports.default = router;
//# sourceMappingURL=grupo.js.map