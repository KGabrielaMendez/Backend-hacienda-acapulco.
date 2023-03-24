const validarJWT = require ('./validar-jwt');
import { esAdminRol, tieneRol } from './validar-roles';


export default {
    ...validarJWT, ...esAdminRol, ...tieneRol,}