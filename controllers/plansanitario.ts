import { Request, Response } from "express";
import Plansanitario from '../models/plansanitario';
import sequelize from '../db/config';
import { QueryTypes } from "sequelize";

export const getPlansanitarios = async (req: Request, res: Response) => {
        try {
            const datosplanS = await sequelize.query(
                "SELECT p.id , d.id as id_dosis,dosis,id_gru,gr.nombre_gru,id_ganado,id_dosis,fecha_inicio,descripcion_ps,p.estado FROM plan_sanitario p inner join dosis d , grupo gr where p.id_dosis = d.id and id_gru = gr.id order by fecha_inicio desc",
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
    const { fecha } = req.params;
    try {
        const plansanitario = await sequelize.query(
            "SELECT p.id , d.id as id_dosis,dosis,id_gru,gr.nombre_gru,id_ganado,id_dosis,fecha_inicio,descripcion_ps,p.estado FROM plan_sanitario p inner join dosis d , grupo gr where p.id_dosis = d.id and id_gru = gr.id and p.estado=($1) order by fecha_inicio desc ",
            {
                bind: [fecha],
                nest:true,
                type: QueryTypes.SELECT
            }
            );
            res.json(plansanitario);

    } catch (err) {
        res.status(500).json({
            message: "error a traer los datos de la base",
            error: err
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
