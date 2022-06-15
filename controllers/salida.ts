import { Request, Response } from "express";
import Salida from './../models/salida';


export const getSalidas = async (req: Request, res: Response) => {
    try {
        const salidas = await Salida.findAll();
        res.json(salidas);
    } catch (err) {
        res.json({
            msg: err,
        })
    }
}

export const getSalida = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const salida = await Salida.findByPk(id);

        if (salida) {
            res.json(salida);
        } else {
            res.status(404).json({ msg: 'No existe salida con el id: ' + id });
        }

    } catch (err) {
        res.json({
            msg: err,
        })
    }

}

export const postSalida = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        //guardar en base de datos
        const salida = await Salida.create(body);
        res.json(salida);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }

}

export const putSalida = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const salida = await Salida.findByPk(id);
        if (!salida) {
            return res.status(404).json({
                msg: 'No existe una salida con el id: ' + id
            });
        }
        await salida.update(body);
        res.json(salida);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}

export const deleteSalida = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const salida = await Salida.findByPk(id);
        if (!salida) {
            return res.status(404).json({
                msg: 'No existe un salida con el id: ' + id
            });
        }
        await salida.update({ estado: false });
        res.json({ salida });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}
