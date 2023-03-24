import {Router} from 'express';
import { findByGroup} from '../controllers/consultasGanado';
import {getGanadoBovinoList, getGanadoEquinoList } from '../controllers/grupo';
import { validarJWT } from '../middlewares/validar-jwt';

const router = Router();

//obtener el listado de ganado con los nombres de las tablas relacionadas

router.get('/bovino', [validarJWT],
getGanadoBovinoList);
router.get('/equino', [validarJWT],
getGanadoEquinoList);
router.get('/:grupo',  [validarJWT],
findByGroup);




export default router;