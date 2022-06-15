import { Request, Response } from "express";
import Pesaje from '../models/pesaje';


export const getPesajes = async (req: Request, res: Response) => {
    try {
        const pesajes = await Pesaje.findAll();
        res.json(pesajes);
    } catch (err) {
        res.json({
            msg: err,
        })
    }
}

export const getPesaje = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const pesaje = await Pesaje.findByPk(id);

        if (pesaje) {
            res.json(pesaje);
        } else {
            res.status(404).json({ msg: 'No existe pesaje con el id: ' + id });
        }

    } catch (err) {
        res.json({
            msg: err,
        })
    }

}

export const postPesaje = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        //guardar en base de datos
        const pesaje = await Pesaje.create(body);
        res.json(pesaje);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }

}

export const putPesaje = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const pesaje = await Pesaje.findByPk(id);
        if (!pesaje) {
            return res.status(404).json({
                msg: 'No existe un pesaje con el id: ' + id
            });
        }
        await pesaje.update(body);
        res.json(pesaje);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}

export const deletePesaje = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const pesaje = await Pesaje.findByPk(id);
        if (!pesaje) {
            return res.status(404).json({
                msg: 'No existe un pesaje con el id: ' + id
            });
        }
        await pesaje.update({ estado: false });
        res.json({ pesaje });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}
