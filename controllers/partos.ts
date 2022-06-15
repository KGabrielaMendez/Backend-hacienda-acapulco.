import { Request, Response } from "express";
import Parto from '../models/parto';


export const getPartos = async (req: Request, res: Response) => {
    try {
        const partos = await Parto.findAll();
        res.json(partos);
    } catch (err) {
        res.json({
            msg: err,
        })
    }
}

export const getParto = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const parto = await Parto.findByPk(id);

        if (parto) {
            res.json(parto);
        } else {
            res.status(404).json({ msg: 'No existe parto con el id: ' + id });
        }

    } catch (err) {
        res.json({
            msg: err,
        })
    }

}

export const postParto = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        //guardar en base de datos
        const parto = await Parto.create(body);
        res.json(parto);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }

}

export const putParto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const parto = await Parto.findByPk(id);
        if (!parto) {
            return res.status(404).json({
                msg: 'No existe un parto con el id: ' + id
            });
        }
        await parto.update(body);
        res.json(parto);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}

export const deleteParto = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const parto = await Parto.findByPk(id);
        if (!parto) {
            return res.status(404).json({
                msg: 'No existe un parto con el id: ' + id
            });
        }
        await parto.update({ estado: false });
        res.json({ parto });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}
