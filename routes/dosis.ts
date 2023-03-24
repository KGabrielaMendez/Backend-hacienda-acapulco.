import {Router} from 'express';
import { getDosis, 
postDosis, putDosis,
deleteDosis } from '../controllers/dosis';

import { validarJWT } from '../middlewares/validar-jwt';

const router = Router();

router.get('/',   [validarJWT],    getDosis);
router.post('/',   [validarJWT],   postDosis);
router.put('/:id',  [validarJWT],  putDosis);
router.delete('/:id',[validarJWT], deleteDosis);



export default router;