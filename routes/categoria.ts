import {Router} from 'express';
         import { validarJWT } from '../middlewares/validar-jwt';
import { getCategorias } from './../controllers/categoria';

const router = Router();

router.get('/',     [validarJWT],  getCategorias);



export default router;