import {Router} from 'express';
import { getSalidas,
         getSalida,
         postSalida,
         putSalida,
         deleteSalida } from '../controllers/salida';
import {check} from 'express-validator';

const router = Router();

router.get('/',       getSalidas);
router.get('/:id',    getSalida);
router.post('/',      postSalida);
router.put('/:id',    putSalida);
router.delete('/:id', deleteSalida);



export default router;