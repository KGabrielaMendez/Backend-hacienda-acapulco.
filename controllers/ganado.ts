import { Request, Response } from "express";
import Ganado from './../models/ganado';


export const getGanados = async (req: Request, res: Response) => {
    try {
        const ganado = await Ganado.findAll();
        res.json(ganado);
    } catch (err) {
        res.json({
            msg: err,
        })
    }
}

export const getGanado = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const ganado = await Ganado.findByPk(id);

        if (ganado) {
            res.json(ganado);
        } else {
            res.status(404).json({ msg: 'No existe ganado con el id: ' + id });
        }

    } catch (err) {
        res.json({
            msg: err,
        })
    }

}

export const postGanado = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        //guardar en base de datos
        const ganado = await Ganado.create(body);
        res.json(ganado);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }

}

export const putGanado = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const ganado = await Ganado.findByPk(id);
        if (!ganado) {
            return res.status(404).json({
                msg: 'No existe un ganado con el id: ' + id
            });
        }
        await ganado.update(body);
        res.json(ganado);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}

export const deleteGanado = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const ganado = await Ganado.findByPk(id);
        if (!ganado) {
            return res.status(404).json({
                msg: 'No existe un ganado con el id: ' + id
            });
        }
        await ganado.update({ estado: false });
        res.json({ ganado });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
};




