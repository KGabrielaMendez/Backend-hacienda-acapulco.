import { Request, Response } from "express";

import Dosis from './../models/dosis';


export const getDosis = async (req: Request, res: Response) => {
    try {
        const dosis = await Dosis.findAll();
        res.json(dosis);
    } catch (err) {
        res.json({
            msg: err,
        })
    }
};


export const postDosis = async (req: Request, res: Response) => {

    const { body } = req;
    try {
        //guardar en base de datos
        const dosis = await Dosis.create(body);
        res.json(dosis);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }

};

export const putDosis = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const dosis = await Dosis.findByPk(id);
        if (!dosis) {
            return res.status(404).json({
                msg: 'No existe un dosis con el id: ' + id
            });
        }
        await dosis.update(body);
        res.json(dosis);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}

export const deleteDosis= async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const dosis = await Dosis.findByPk(id);
        if (!dosis) {
            return res.status(404).json({
                msg: 'No existe un dosis con el id: ' + id
            });
        }
        await dosis.destroy();
        res.json({ dosis });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
};

