import {Router} from 'express';
import { getGanados,
         getGanado,
         postGanado,
         putGanado,
         deleteGanado } from '../controllers/ganado';
import {check} from 'express-validator';

const router = Router();

router.get('/',       getGanados);
router.get('/:id',    getGanado);
router.post('/',      postGanado);
router.put('/:id',    putGanado);
router.delete('/:id', deleteGanado);







export default router;