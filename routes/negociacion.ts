import { Router } from 'express';

import { validarJWT } from '../middlewares/validar-jwt';
import { getNegociacion } from './../controllers/compraVenta';


const router = Router();

router.get('/:id', [validarJWT],
    getNegociacion);

export default router;