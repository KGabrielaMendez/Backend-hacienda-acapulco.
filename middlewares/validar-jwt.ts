import { NextFunction, Request, Response } from 'express';
import Usuario from '../models/usuario';



const jwt = require('jsonwebtoken');


export const validarJWT = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('x-token');
    console.log(token);
    if (!token) {
        return res.status(401).json({
            message: 'Necesita Iniciar Sesión para acceder a la información',
        });

    }

    try {
        const { id } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
       // leer el usuario que corresponde al uid
        const usuario = await Usuario.findByPk(id);
       
       if(!usuario) {
        return res.status(401).json({
            message: 'Token no válido - usuario no existe DB'
        })
       }
       // Verificar si el uid tiene estado true
    //    if ( !usuario.estado ) {
    //     return res.status(401).json({
    //         msg: 'Token no válido - usuario con estado: false'
    //     })
    // }
        req.usuario = usuario;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: 'Token no válido'
        })
    }
}