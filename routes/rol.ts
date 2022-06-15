import {Router} from 'express';
import { getRoles,
         getRol,
         postRol,
         putRol,
         deleteRol } from '../controllers/roles';

const router = Router();

router.get('/',       getRoles);
router.get('/:id',    getRol);
router.post('/',      postRol);
router.put('/:id',    putRol);
router.delete('/:id', deleteRol);



export default router;