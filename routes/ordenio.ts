import { Router } from 'express';
import {
    getOrdenios,
    getOrdeniosByDate,
    postOrdenio,
    putOrdenio,
    deleteOrdenio
} from '../controllers/ordenio';
import { check } from 'express-validator';
import { validarJWT } from '../middlewares/validar-jwt';
import { esAdminRol, tieneRol } from '../middlewares/validar-roles';

const router = Router();

router.get('/', [
    validarJWT,
    //esAdminRol,
    //tieneRol('1','3'),

], getOrdenios);
router.get('/:fecha', [validarJWT],getOrdeniosByDate);
router.post('/', [validarJWT],postOrdenio);
router.put('/:id', [validarJWT],putOrdenio);
router.delete('/:id',[validarJWT], deleteOrdenio);



export default router;