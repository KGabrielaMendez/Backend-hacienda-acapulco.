import {Router} from 'express';
import { getSalidas,
         getSalida,
         postSalida,
         putSalida,
         deleteSalida } from '../controllers/salida';

         import { validarJWT } from '../middlewares/validar-jwt';

const router = Router();

router.get('/',       [validarJWT], getSalidas);
router.get('/:id',   [validarJWT], getSalida);
router.post('/',     [validarJWT], postSalida);
router.put('/:id',   [validarJWT], putSalida);
router.delete('/:id',[validarJWT], deleteSalida);



export default router;