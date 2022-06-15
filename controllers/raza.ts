import { Request, Response } from "express";
import Raza from '../models/raza';


export const getRazas = async (req: Request, res: Response) => {
    try {
        const razas = await Raza.findAll();
        res.json(razas);
    } catch (err) {
        res.json({
            msg: err,
        })
    }
}

export const getRaza = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const raza = await Raza.findByPk(id);

        if (raza) {
            res.json(raza);
        } else {
            res.status(404).json({ msg: 'No existe raza con el id: ' + id });
        }

    } catch (err) {
        res.json({
            msg: err,
        })
    }

}

export const postRaza = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        //guardar en base de datos
        const raza = await Raza.create(body);
        res.json(raza);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }

}

export const putRaza = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const raza = await Raza.findByPk(id);
        if (!raza) {
            return res.status(404).json({
                msg: 'No existe un raza con el id: ' + id
            });
        }
        await raza.update(body);
        res.json(raza);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}

export const deleteRaza = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const raza = await Raza.findByPk(id);
        if (!raza) {
            return res.status(404).json({
                msg: 'No existe un raza con el id: ' + id
            });
        }
        await raza.destroy();;
        res.json({ raza });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}
