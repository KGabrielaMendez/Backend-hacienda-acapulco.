import {Router} from 'express';
import { getPesajes,
         getPesaje,
         postPesaje,
         putPesaje,
         deletePesaje } from '../controllers/pesaje';
import {check} from 'express-validator';

const router = Router();

router.get('/',       getPesajes);
router.get('/:id',    getPesaje);
router.post('/',      postPesaje);
router.put('/:id',    putPesaje);
router.delete('/:id', deletePesaje);



export default router;