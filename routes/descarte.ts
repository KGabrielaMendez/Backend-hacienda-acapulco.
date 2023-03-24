import {Router} from 'express';
import { putDescarteGanado, DescartesGanado} from '../controllers/descarte';
import { esAdminRol, tieneRol } from '../middlewares/validar-roles';
import { validarJWT } from '../middlewares/validar-jwt';

const router = Router();
//obtener el listado de ganado con los nombres de las tablas relacionadas

router.get('/', [validarJWT],DescartesGanado);
router.put('/:id', [validarJWT,esAdminRol],
putDescarteGanado);




export default router;