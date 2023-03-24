import { NextFunction, Request, Response } from 'express';

export const esAdminRol = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.usuario) {
        return res.status(500).json({
            message: 'Se quiere verificar el rol sin validar el token primero'
        })
    }

    const { id_rol, nombre_completo } = req.usuario;
    console.error(id_rol)
    //1 - admin : 2 - user : 3 - employee
    if (id_rol !== 1) {
        return res.status(401).json({
            message: `${nombre_completo} no es administrador`
        })
    }else{

        next();
    }

}

export const tieneRol = (...roles: string[]) => {
    return (req: Request, res: Response,next:NextFunction) => {
        if( !req.usuario){
            return res.status(500).json({
                message: 'Se quiere verificar el rol sin validar el token'
            });
        }
        if(!roles.includes(req.usuario.rol)){
            return res.status(404).json({
                message:`el servicio requiere rol de admin o employee`
            })
        }

        next();
    }
}