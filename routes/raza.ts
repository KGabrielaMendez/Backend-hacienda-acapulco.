import {Router} from 'express';
import { getRazas,
         getRaza,
         postRaza,
         putRaza,
         deleteRaza } from '../controllers/raza';
import {check} from 'express-validator';

const router = Router();

router.get('/',       getRazas);
router.get('/:id',    getRaza);
router.post('/',      postRaza);
router.put('/:id',    putRaza);
router.delete('/:id', deleteRaza);



export default router;