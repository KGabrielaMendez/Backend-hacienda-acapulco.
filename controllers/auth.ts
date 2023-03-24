
import { Response, Request } from 'express';
import Usuario from '../models/usuario';
import bcryptjs from 'bcryptjs';
import {generarJWT} from '../helpers/generarJWT';


export const login = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        //verificar si usuario existe , estado true 
        const usuario = await Usuario.findOne({ where: { usuario: body.usuario, estado: 1 } });

        if (!usuario) {
            return res.status(400).json({
                message: 'El Usuario no existe'
            });
        } else {
            const passwordDB = usuario.password;
            const validPassword = bcryptjs.compareSync(body.password, passwordDB);
            if (!validPassword) {
                return res.status(400).json({
                    message: 'Usuario o contraseña incorrectos'
                })
            }
        
        //generar JWT
        const token = await generarJWT(usuario.id);
            console.log(token,' :token');
        res.json({
            user: usuario,
            token
        })

    }

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hable con el admon'
        });
    }

}

