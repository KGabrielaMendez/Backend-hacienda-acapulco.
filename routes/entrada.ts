import {Router} from 'express';
import { getEntradas,
         getEntrada,
         postEntrada,
         putEntrada,
         deleteEntrada } from '../controllers/entrada';
import {check} from 'express-validator';

const router = Router();

router.get('/',       getEntradas);
router.get('/:id',    getEntrada);
router.post('/',      postEntrada);
router.put('/:id',    putEntrada);
router.delete('/:id', deleteEntrada);



export default router;