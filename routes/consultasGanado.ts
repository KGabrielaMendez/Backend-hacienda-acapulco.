import {Router} from 'express';
import { findByGroup} from '../controllers/consultasGanado';
import {getByGroups } from '../controllers/grupo';

const router = Router();

//obtener el listado de ganado con los nombres de las tablas relacionadas

router.get('/', getByGroups);
router.get('/:grupo', findByGroup);




export default router;