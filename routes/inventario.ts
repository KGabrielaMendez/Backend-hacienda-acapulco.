import { Router } from 'express';
import { getInventario, getDetallesInventario, postEntrada } from '../controllers/inventario'; '../controllers/inventario';

import { validarJWT } from '../middlewares/validar-jwt';

const router = Router();

router.get('/',    [validarJWT],  getInventario);
router.get('/:id', [validarJWT],  getDetallesInventario);
router.post('/',   [validarJWT],  postEntrada);
//router.put('/:id',    putComerciante);
//router.delete('/:id', deleteComerciante);



export default router;