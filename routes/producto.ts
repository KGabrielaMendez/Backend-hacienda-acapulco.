import {Router} from 'express';
import { getProductos,
         getProducto,
         postProducto,
         putProducto,
         deleteProducto } from '../controllers/producto';
import {check} from 'express-validator';

const router = Router();

router.get('/',       getProductos);
router.get('/:id',    getProducto);
router.post('/',      postProducto);
router.put('/:id',    putProducto);
router.delete('/:id', deleteProducto);



export default router;