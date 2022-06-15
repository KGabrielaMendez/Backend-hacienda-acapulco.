import { Request, Response } from "express";

import Ocupacion from './../models/ocupacion';


export const getOcupaciones = async (req: Request, res: Response) => {
    try {
        const ocupacion = await Ocupacion.findAll();
        res.json(ocupacion);
    } catch (err) {
        res.json({
            msg: err,
        })
    }
};

export const getOcupacion = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const ocupacion = await Ocupacion.findByPk(id);

        if (ocupacion) {
            res.json(ocupacion);
        } else {
            res.status(404).json({ msg: 'No existe ocupacion con el id: ' + id });
        }


    } catch (err) {
        res.json({
            msg: err,
        })
    }

};

export const postOcupacion = async (req: Request, res: Response) => {

    const { body } = req;
    try {
        //guardar en base de datos
        const ocupacion = await Ocupacion.create(body);
        res.json(ocupacion);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }

};

export const putOcupacion = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const ocupacion = await Ocupacion.findByPk(id);
        if (!ocupacion) {
            return res.status(404).json({
                msg: 'No existe un ocupacion con el id: ' + id
            });
        }
        await ocupacion.update(body);
        res.json(ocupacion);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}

export const deleteOcupacion = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const ocupacion = await Ocupacion.findByPk(id);
        if (!ocupacion) {
            return res.status(404).json({
                msg: 'No existe un ocupacion con el id: ' + id
            });
        }
        await ocupacion.destroy();
        res.json({ ocupacion });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
};

