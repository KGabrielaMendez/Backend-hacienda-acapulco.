import {Router} from 'express';
import { getPlansanitarios,
         getPlansanitario,
         postPlansanitario,
         putPlansanitario,
         deletePlansanitario } from '../controllers/plansanitario';
import {check} from 'express-validator';

const router = Router();

router.get('/',       getPlansanitarios);
router.get('/:id',    getPlansanitario);
router.post('/',      postPlansanitario);
router.put('/:id',    putPlansanitario);
router.delete('/:id', deletePlansanitario);



export default router;