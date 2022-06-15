import { Request, Response } from "express";
import Entrada from './../models/entrada';


export const getEntradas = async (req: Request, res: Response) => {
    try {
        const entradas = await Entrada.findAll();
        res.json(entradas);
    } catch (err) {
        res.json({
            msg: err,
        })
    }
}

export const getEntrada = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const entrada = await Entrada.findByPk(id);

        if (entrada) {
            res.json(entrada);
        } else {
            res.status(404).json({ msg: 'No existe entrada con el id: ' + id });
        }

    } catch (err) {
        res.json({
            msg: err,
        })
    }

}

export const postEntrada = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        //guardar en base de datos
        const entrada = await Entrada.create(body);
        res.json(entrada);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }

}

export const putEntrada = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const entrada = await Entrada.findByPk(id);
        if (!entrada) {
            return res.status(404).json({
                msg: 'No existe un entrada con el id: ' + id
            });
        }
        await entrada.update(body);
        res.json(entrada);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}

export const deleteEntrada = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const entrada = await Entrada.findByPk(id);
        if (!entrada) {
            return res.status(404).json({
                msg: 'No existe un entrada con el id: ' + id
            });
        }
        await entrada.update({ estado: false });
        res.json({ entrada });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}
