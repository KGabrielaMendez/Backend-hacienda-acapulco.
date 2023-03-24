import {Router} from 'express';
import { getGrupos,
         getGrupo,
         postGrupo,
         putGrupo,
         deleteGrupo} from '../controllers/grupo';

        import { validarJWT } from '../middlewares/validar-jwt';

const router = Router();

router.get('/',    [validarJWT],   getGrupos);
router.get('/:id', [validarJWT],  getGrupo);
router.post('/',   [validarJWT],  postGrupo);
router.put('/:id', [validarJWT],   putGrupo);
router.delete('/:id',[validarJWT], deleteGrupo);





export default router;