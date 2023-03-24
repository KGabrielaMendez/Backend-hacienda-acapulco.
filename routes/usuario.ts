import { Router } from 'express';
import {
        getEmpleados,
        getUsuario,
        getUsuarios,
        postUsuario,
        putUsuario,
        deleteUsuario
} from '../controllers/usuarios';

import { validarJWT } from '../middlewares/validar-jwt';
import { esAdminRol, tieneRol } from '../middlewares/validar-roles';

const router = Router();
router.get('/usuarios', [validarJWT,esAdminRol], getUsuarios);
router.get('/', [validarJWT,esAdminRol], getEmpleados);
router.get('/:id', [validarJWT,esAdminRol], getUsuario);
router.post('/', [validarJWT,esAdminRol], postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id',  [validarJWT,esAdminRol], deleteUsuario);





export default router;