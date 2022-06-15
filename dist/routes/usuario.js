"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const usuarios_1 = require("../controllers/usuarios");
const router = (0, express_1.Router)();
router.get('/', usuarios_1.getUsuarios);
router.get('/:id', usuarios_1.getUsuario);
router.post('/', [(0, express_validator_1.check)('nombre_usr', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('email_usr', 'El correo no es valido').isEmail(),
    (0, express_validator_1.check)('genero_usr', 'No es valido').isIn(['masculino', 'femenino', 'otro'])], 
//validarCampos,
usuarios_1.postUsuario);
router.put('/:id', usuarios_1.putUsuario);
router.delete('/:id', usuarios_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map