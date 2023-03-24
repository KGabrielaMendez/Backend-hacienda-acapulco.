import { Router } from 'express';
import {
    postVenta,
    getDetailVenta,
    postPagos,
    getPagos,
    putVenta,
    getVentaGanado
} from '../controllers/compraVenta';

import { validarJWT } from '../middlewares/validar-jwt';
import { esAdminRol, tieneRol } from '../middlewares/validar-roles';
import { getIdNegociacion, getDetalleVenta, postDetalleVenta } from '../controllers/detalleVenta';
import { getDetalleCompra, postDetalleCompra } from '../controllers/detalleCompra';

const router = Router();

router.post('/compra',    postDetalleCompra);
router.get('/compra/:id',    getDetalleCompra);
    
router.get('/', [validarJWT],
    getVentaGanado);


router.get('/getId', [validarJWT],
    getIdNegociacion);  //obtener el id de negociacion

router.get('/:id', [validarJWT],
    getDetailVenta);

router.put('/:id', [validarJWT],
    putVenta);

router.post('/', [validarJWT, esAdminRol],
    postVenta);

router.post('/detalle', [validarJWT, esAdminRol],
    postDetalleVenta);


router.get('/detalle/:id', [validarJWT],
    getDetalleVenta);




router.post('/pagos', [validarJWT, esAdminRol],
    postPagos);
router.get('/pagos/:id', [validarJWT, esAdminRol],
    getPagos);

export default router;