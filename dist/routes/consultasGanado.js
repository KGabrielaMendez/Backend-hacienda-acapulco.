"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consultasGanado_1 = require("../controllers/consultasGanado");
const grupo_1 = require("../controllers/grupo");
const router = (0, express_1.Router)();
//obtener el listado de ganado con los nombres de las tablas relacionadas
router.get('/', grupo_1.getByGroups);
router.get('/:grupo', consultasGanado_1.findByGroup);
exports.default = router;
//# sourceMappingURL=consultasGanado.js.map