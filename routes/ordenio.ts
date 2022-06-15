import {Router} from 'express';
import { getOrdenios,
         getOrdenio,
         postOrdenio,
         putOrdenio,
         deleteOrdenio } from '../controllers/ordenio';
import {check} from 'express-validator';

const router = Router();

router.get('/',       getOrdenios);
router.get('/:id',    getOrdenio);
router.post('/',      postOrdenio);
router.put('/:id',    putOrdenio);
router.delete('/:id', deleteOrdenio);



export default router;