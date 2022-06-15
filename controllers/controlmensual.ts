import { Request, Response } from "express";
import ControlMensual from './../models/controlMensual';
import sequelize from './../db/config';
import { QueryTypes } from 'sequelize';


export const getControlMensuales = async (req: Request, res: Response) => {
    try {
        const controlMensuals = await sequelize.query(
            "select * from cuenta_ordenio",
            { 
                nest: true,
                type: QueryTypes.SELECT
            }
        )
        res.json(controlMensuals);
    } catch (err) {
        res.json({
            msg: err,
        })
    }
}

export const getControlMensual = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const controlMensual = await ControlMensual.findByPk(id);

        if (controlMensual) {
            res.json(controlMensual);
        } else {
            res.status(404).json({ msg: 'No existe controlMensual con el id: ' + id });
        }

    } catch (err) {
        res.json({
            msg: err,
        })
    }

}

export const postControlMensual = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        //guardar en base de datos
        const controlMensual = await ControlMensual.create(body);
        res.json(controlMensual);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }

}

export const putControlMensual = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const controlMensual = await ControlMensual.findByPk(id);
        if (!controlMensual) {
            return res.status(404).json({
                msg: 'No existe un controlMensual con el id: ' + id
            });
        }
        await controlMensual.update(body);
        res.json(controlMensual);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}

export const deleteControlMensual = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const controlMensual = await ControlMensual.findByPk(id);
        if (!controlMensual) {
            return res.status(404).json({
                msg: 'No existe un controlMensual con el id: ' + id
            });
        }
        await controlMensual.update({ estado: false });
        res.json({ controlMensual });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}
