import {Router} from 'express';
import { getControlMensuales,
         getControlMensual,
         postControlMensual,
         putControlMensual,
         deleteControlMensual } from '../controllers/controlmensual';
import { validarJWT } from '../middlewares/validar-jwt';

const router = Router();

router.get('/',       [validarJWT], getControlMensuales);
router.get('/:id',   [validarJWT],  getControlMensual);
router.post('/',     [validarJWT],  postControlMensual);
router.put('/:id',    putControlMensual);
router.delete('/:id', deleteControlMensual);



export default router;