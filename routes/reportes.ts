import {Router} from 'express';
import { getPendientesFechas, getTorosVenta, getTorosVentaAnio, getGanadoVendido, getDescarteGanado, getGanadoEquino } from '../controllers/reportesGanado';
import { getProximoExpirar,getExpirado, getIngresosRecientes } from '../controllers/reportesInventario';
import { getAniosServicio, getEdad } from '../controllers/reportesUsuarios';

         
    import { validarJWT } from '../middlewares/validar-jwt';

const router = Router();

//ganado
router.get('/torosVenta/:fecha_inicio/:fecha_fin',      [validarJWT],  getTorosVenta);
router.get('/torosVentaAnio/:fecha',      [validarJWT],  getTorosVentaAnio);
router.get('/ValoresPendientesFechas/:fecha_inicio/:fecha_fin',      [validarJWT], getPendientesFechas );
router.get('/ganadoVendido/:fecha_inicio/:fecha_fin',      [validarJWT], getGanadoVendido );
router.get('/descarteGanado/:fecha_inicio/:fecha_fin',      [validarJWT], getDescarteGanado );
router.get('/ganadoEquino/:fecha_inicio/:fecha_fin',      [validarJWT], getGanadoEquino );


//inventario
router.get('/proximoExpirar/:mes',      [validarJWT],  getProximoExpirar);
router.get('/expirado/',      [validarJWT],  getExpirado);
router.get('/ingresosRecientes/:fecha',      [validarJWT],  getIngresosRecientes);

//usuarios
router.get('/aniosServicio', [validarJWT],getAniosServicio);
router.get('/edadEmpleados', [validarJWT],getEdad);



export default router;