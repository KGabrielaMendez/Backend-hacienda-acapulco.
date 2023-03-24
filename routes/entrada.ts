import {Router} from 'express';
import { getEntradas,
         getEntrada,
         postEntrada,
         putEntrada,
         deleteEntrada } from '../controllers/entrada';

         import { validarJWT } from '../middlewares/validar-jwt';

const router = Router();

router.get('/',   [validarJWT],    getEntradas);
router.get('/:id', [validarJWT],   getEntrada);
router.post('/',  [validarJWT],    postEntrada);
router.put('/:id',  [validarJWT],  putEntrada);
router.delete('/:id', [validarJWT], deleteEntrada);



export default router;