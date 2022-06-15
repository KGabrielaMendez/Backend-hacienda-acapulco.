import {Router} from 'express';
import { getPartos,
         getParto,
         postParto,
         putParto,
         deleteParto } from '../controllers/partos';
import {check} from 'express-validator';

const router = Router();

router.get('/',       getPartos);
router.get('/:id',    getParto);
router.post('/',      postParto);
router.put('/:id',    putParto);
router.delete('/:id', deleteParto);



export default router;