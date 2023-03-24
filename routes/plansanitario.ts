import {Router} from 'express';
import { getPlansanitarios,
         getPlansanitario,
         postPlansanitario,
         putPlansanitario,
         deletePlansanitario } from '../controllers/plansanitario';

         import { validarJWT } from '../middlewares/validar-jwt';

const router = Router();

router.get('/',    [validarJWT],      getPlansanitarios);
router.get('/:fecha',   [validarJWT], getPlansanitario);
router.post('/',     [validarJWT],    postPlansanitario);
router.put('/:id',   [validarJWT],    putPlansanitario);
router.delete('/:id', [validarJWT], deletePlansanitario);



export default router;