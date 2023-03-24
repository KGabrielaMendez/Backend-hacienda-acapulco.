import {Router} from 'express';
import { getComerciantes,
         getComerciante,
         postComerciante,
         putComerciante,
         deleteComerciante } from '../controllers/comerciante';
import { validarJWT } from '../middlewares/validar-jwt';
import { esAdminRol, tieneRol } from '../middlewares/validar-roles';
         

const router = Router();

router.get('/', [validarJWT],
getComerciantes);
router.get('/:id', [validarJWT],
getComerciante);
router.post('/',  [validarJWT, esAdminRol],
postComerciante);
router.put('/:id', [validarJWT,esAdminRol],
putComerciante);
router.delete('/:id', [validarJWT],
deleteComerciante);



export default router;