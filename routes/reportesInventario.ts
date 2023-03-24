import {Router} from 'express';
import { getTorosVenta,getTorosVentaAnio } from '../controllers/reportesGanado';
         
    import { validarJWT } from '../middlewares/validar-jwt';

const router = Router();

router.get('/torosVenta/:fecha_inicio/:fecha_fin',      [validarJWT],  getTorosVenta);
router.get('/torosVentaAnio/:fecha',      [validarJWT],  getTorosVentaAnio);
//router.get('/:id',    [validarJWT], getRol);
//router.post('/',     [validarJWT],  postRol);
//router.put('/:id',    [validarJWT], putRol);
//router.delete('/:id', deleteRol);



export default router;
//select e.id, e.id_pro, lote, p.nombre_pro, fechaexp, cantidad from entrada e, productos p where e.id_pro=p.id and month(fechaexp)<=(month(fechaexp)+3) and year(fechaexp) = year(curdate())