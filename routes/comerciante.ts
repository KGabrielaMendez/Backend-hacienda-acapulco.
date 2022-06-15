import {Router} from 'express';
import { getComerciantes,
         getComerciante,
         postComerciante,
         putComerciante,
         deleteComerciante } from '../controllers/comerciante';
import {check} from 'express-validator';

const router = Router();

router.get('/',       getComerciantes);
router.get('/:id',    getComerciante);
router.post('/',      postComerciante);
router.put('/:id',    putComerciante);
router.delete('/:id', deleteComerciante);



export default router;