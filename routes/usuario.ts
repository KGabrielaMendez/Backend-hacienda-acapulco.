import { Router } from 'express';
import { check } from 'express-validator';
import {
        getUsuarios,
        getUsuario,
        postUsuario,
        putUsuario,
        deleteUsuario
} from '../controllers/usuarios';
import { validarCampos } from '../middlewares/validar-campos';



const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/',
        [check('nombre_usr',
                'El nombre es obligatorio').not().isEmpty(),
        check('email_usr',
                'El correo no es valido').isEmail(),
        check('genero_usr','No es valido').isIn(['masculino','femenino','otro'])],
        //validarCampos,
        postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);



export default router;