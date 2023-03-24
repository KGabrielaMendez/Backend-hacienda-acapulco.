import {Router} from 'express';
import { getRoles,
         getRol,
         postRol,
         putRol,
         deleteRol } from '../controllers/roles';
         
    import { validarJWT } from '../middlewares/validar-jwt';

const router = Router();

router.get('/',      [validarJWT],  getRoles);
router.get('/:id',    [validarJWT], getRol);
router.post('/',     [validarJWT],  postRol);
router.put('/:id',    [validarJWT], putRol);
router.delete('/:id', deleteRol);



export default router;