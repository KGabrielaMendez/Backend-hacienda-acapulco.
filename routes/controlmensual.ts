import {Router} from 'express';
import { getControlMensuales,
         getControlMensual,
         postControlMensual,
         putControlMensual,
         deleteControlMensual } from '../controllers/controlmensual';

const router = Router();

router.get('/',       getControlMensuales);
router.get('/:id',    getControlMensual);
router.post('/',      postControlMensual);
router.put('/:id',    putControlMensual);
router.delete('/:id', deleteControlMensual);



export default router;