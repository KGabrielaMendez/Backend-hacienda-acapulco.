import { Request, Response } from "express";
import Usuario from './../models/usuario';
import bcrypt from 'bcryptjs';


export const getUsuarios = async (req: Request, res: Response) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (err) {
        res.json({
            msg: err,
        })
    }
}

export const getUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);

        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ msg: 'No existe usuario con el id: ' + id });
        }


    } catch (err) {
        res.json({
            msg: err,
        })
    }

}

export const postUsuario = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        //verificar que el email no exista
        const existeEmail = await Usuario.findOne({
            where: {
                email_usr: body.email_usr
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email: ' + body.email_usr
            });
        }
        //encriptar contraseña 
        const salt = bcrypt.genSaltSync();
        body.password= bcrypt.hashSync(body.password,salt);
        //guardar en base de datos
        const usuario = await Usuario.create(body);
        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }

}

export const putUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id: ' + id
            });
        }
        //verificar que el email no exista
        const existeEmail = await Usuario.findOne({
            where: {
                email_usr: body.email_usr,
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email: ' + body.email_usr
            });
        }
        await usuario.update(body);
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}

export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id: ' + id
            });
        }
        await usuario.update({ estado: true });
        res.json({ usuario });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}
