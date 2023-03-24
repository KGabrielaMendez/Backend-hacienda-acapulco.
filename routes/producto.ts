import {Router} from 'express';
import { getProductos,
         getProducto,
         postProducto,
         putProducto,
         deleteProducto } from '../controllers/producto';

         import { validarJWT } from '../middlewares/validar-jwt';

const router = Router();

router.get('/',     [validarJWT],  getProductos);
router.get('/:id',  [validarJWT],  getProducto);
router.post('/',    [validarJWT], postProducto);
router.put('/:id',  [validarJWT], putProducto);
router.delete('/:id',[validarJWT], deleteProducto);



export default router;