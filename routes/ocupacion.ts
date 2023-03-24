import {Router} from 'express';
import { getOcupaciones,
         getOcupacion,
         postOcupacion,
         putOcupacion,
         deleteOcupacion } from '../controllers/ocupacion';

         import { validarJWT } from '../middlewares/validar-jwt';

const router = Router();

router.get('/',     [validarJWT],  getOcupaciones);
router.get('/:id',  [validarJWT],  getOcupacion);
router.post('/',    [validarJWT],  postOcupacion);
router.put('/:id',  [validarJWT],  putOcupacion);
router.delete('/:id', [validarJWT], deleteOcupacion);



export default router;