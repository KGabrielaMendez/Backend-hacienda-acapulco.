import { Request, Response } from "express";

import Rol from './../models/rol';


export const getRoles = async (req: Request, res: Response) => {
    try {
        const rol = await Rol.findAll();
        res.json(rol);
    } catch (err) {
        res.json({
            msg: err,
        })
    }
};

export const getRol = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const rol = await Rol.findByPk(id);

        if (rol) {
            res.json(rol);
        } else {
            res.status(404).json({ msg: 'No existe rol con el id: ' + id });
        }


    } catch (err) {
        res.json({
            msg: err,
        })
    }

};

export const postRol = async (req: Request, res: Response) => {

    const { body } = req;
    try {
        //guardar en base de datos
        const rol = await Rol.create(body);
        res.json(rol);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }

};

export const putRol = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const rol = await Rol.findByPk(id);
        if (!rol) {
            return res.status(404).json({
                msg: 'No existe un rol con el id: ' + id
            });
        }
        await rol.update(body);
        res.json(rol);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}

export const deleteRol = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const rol = await Rol.findByPk(id);
        if (!rol) {
            return res.status(404).json({
                msg: 'No existe un rol con el id: ' + id
            });
        }
        await rol.destroy();
        res.json({ rol });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
};

