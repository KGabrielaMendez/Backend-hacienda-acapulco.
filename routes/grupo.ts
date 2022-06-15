import {Router} from 'express';
import { getGrupos,
         getGrupo,
         postGrupo,
         putGrupo,
         deleteGrupo,
        getByGroups } from '../controllers/grupo';
import {check} from 'express-validator';

const router = Router();

router.get('/',       getGrupos);
router.get('/:id',    getGrupo);
router.post('/',      postGrupo);
router.put('/:id',    putGrupo);
router.delete('/:id', deleteGrupo);





export default router;