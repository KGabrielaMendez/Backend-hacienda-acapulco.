
import Rol from './../models/rol';

export const esRolValido = async(tipo_rol = '') => {

    const existeRol = await Rol.findOne({tipo_rol});
    if(!existeRol){
        throw new Error(`El rol ${tipo_rol} no está registrado en la BD`);
    };
}

