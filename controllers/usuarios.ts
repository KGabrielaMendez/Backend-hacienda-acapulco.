import { Request, Response } from "express";
import Usuario from './../models/usuario';
import bcrypt from 'bcryptjs';

import sequelize from './../db/config';
import { QueryTypes } from 'sequelize';



export const getEmpleados = async (req: Request, res: Response) => {
    try {
        const usuarios = await sequelize.query(
            "select u.id, nombre_usr, apellido_usr, nombre_completo, genero_usr,telefono_usr,cedula_usr,direccion_usr,email_usr,fecha_nac_usr, usuario, o.ocupacion, id_ocupacion, u.estado from usuarios u inner join ocupacion o where u.estado =true and o.id=u.id_ocupacion",
            {
                nest: true,
                type: QueryTypes.SELECT
            }
            );
        res.json(usuarios);
    } catch (err) {
        res.json({
            msg: err,
        })
    }
};

export const getUsuarios = async (req: Request, res: Response) => {
    try {
        const usuarios = await sequelize.query(
            "select u.id, nombre_completo,email_usr, usuario, o.ocupacion, id_ocupacion, u.estado, u.id_rol, r.tipo_rol , password from usuarios u inner join ocupacion o inner join roles r where u.estado =true and o.id=u.id_ocupacion and usuario is not null and u.id_rol=r.id",
            {
                nest: true,
                type: QueryTypes.SELECT
            }
            );
        res.json(usuarios);
    } catch (err) {
        res.json({
            msg: err,
        })
    }
};

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
        if(!body.email_usr){
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
    }
        //encriptar contraseña 
        const salt = bcrypt.genSaltSync();
        if(body.password){
            body.password = bcrypt.hashSync(body.password, salt);
        }
        
        //guardar en base de datos
        const usuario = await Usuario.create(body);
        res.json(usuario);

    } catch (errors) {
        console.log("= " ,errors,"este es el error");
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: errors
        });
    }

}

export const putUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    console.log('------------putuser',body);
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id: ' + id
            });
        }else{
            const salt = bcrypt.genSaltSync();
            if(body.password){
                body.password = bcrypt.hashSync(body.password, salt);
            }
            await usuario.update(body);
            res.json(usuario);
        }
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
        await usuario.update({ estado: false });

        const usuarioAutenticado = req.usuario;
        res.json({ usuario, usuarioAutenticado });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}
