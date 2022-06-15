import { Request, Response } from "express";
import Plansanitario from '../models/plansanitario';
import sequelize from '../db/config';
import { QueryTypes } from "sequelize";

export const getPlansanitarios = async (req: Request, res: Response) => {
        try {
            const datosplanS = await sequelize.query(
                "SELECT  p.id, gr.nombre_gru, p.fecha_ps, p.descripcion_ps, p.observacion_ps FROM plan_sanitario p, grupo gr where gr.id = p.id_gru",
                {
                    nest: true,
                    type: QueryTypes.SELECT
                }
            );
            res.json(datosplanS);
        }
        catch(error){
            console.log(error);
            res.status(500).json({
                msg: "error en la obtención de datos, Hable con el admin",
                error:error
            });
        }
    }


export const getPlansanitario = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const plansanitario = await Plansanitario.findByPk(id);

        if (plansanitario) {
            res.json(plansanitario);
        } else {
            res.status(404).json({ msg: 'No existe plansanitario con el id: ' + id });
        }

    } catch (err) {
        res.json({
            msg: err,
        })
    }

}

export const postPlansanitario = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        //guardar en base de datos
        const plansanitario = await Plansanitario.create(body);
        res.json(plansanitario);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }

}

export const putPlansanitario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const plansanitario = await Plansanitario.findByPk(id);
        if (!plansanitario) {
            return res.status(404).json({
                msg: 'No existe un plansanitario con el id: ' + id
            });
        }
        await plansanitario.update(body);
        res.json(plansanitario);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}

export const deletePlansanitario = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const plansanitario = await Plansanitario.findByPk(id);
        if (!plansanitario) {
            return res.status(404).json({
                msg: 'No existe un plansanitario con el id: ' + id
            });
        }
        await plansanitario.update({ estado: false });
        res.json({ plansanitario });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}
