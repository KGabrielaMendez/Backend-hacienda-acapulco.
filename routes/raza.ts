import {Router} from 'express';
import { getRazas,
         getRaza,
         postRaza,
         putRaza,
         deleteRaza } from '../controllers/raza';

         import { validarJWT } from '../middlewares/validar-jwt';

const router = Router();

router.get('/',     [validarJWT],  getRazas);
router.get('/:id',  [validarJWT],  getRaza);
router.post('/',    [validarJWT],  postRaza);
router.put('/:id',  [validarJWT],  putRaza);
router.delete('/:id', [validarJWT],deleteRaza);



export default router;