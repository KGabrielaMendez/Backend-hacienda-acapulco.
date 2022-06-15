import {Router} from 'express';
import { getOcupaciones,
         getOcupacion,
         postOcupacion,
         putOcupacion,
         deleteOcupacion } from '../controllers/ocupacion';
import {check} from 'express-validator';

const router = Router();

router.get('/',       getOcupaciones);
router.get('/:id',    getOcupacion);
router.post('/',      postOcupacion);
router.put('/:id',    putOcupacion);
router.delete('/:id', deleteOcupacion);



export default router;