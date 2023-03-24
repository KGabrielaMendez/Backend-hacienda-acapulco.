import {Router} from 'express';
import { getGanados,
         getGanado,
         postGanado,
         putGanado,
         deleteGanado } from '../controllers/ganado';

         import { validarJWT } from '../middlewares/validar-jwt';

const router = Router();

router.get('/',     [validarJWT],  getGanados);
router.get('/:id',  [validarJWT],  getGanado);
router.post('/',     [validarJWT], postGanado);
router.put('/:id',   [validarJWT], putGanado);
router.delete('/:id',[validarJWT], deleteGanado);







export default router;