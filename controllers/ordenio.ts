import { Request, Response } from "express";
import Ordenio from '../models/ordenio';
import sequelize from '../db/config';
import { QueryTypes } from "sequelize";


export const getOrdenios = async (req: Request, res: Response) => {
    try {
        const ordenios = await sequelize.query(
            "select id , DATE_FORMAT(fecha_ord,'%d - %b - %Y') as 'Fecha' , litros_ord as 'Litros Totales'  from ordenio ;",
            {
                nest:true,
                type: QueryTypes.SELECT
            }
        )
        res.json(ordenios);
    } catch (err) {
        res.status(500).json({
            msg: "error a traer los datos de la base",
            error: err
        })
    }
}


export const getOrdeniosFindAll = async (req: Request, res: Response) => {
    try {
        const ordenios = await Ordenio.findAll();
        res.json(ordenios);
    } catch (err) {
        res.json({
            msg: err,
        })
    }
}

export const getOrdenio = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const ordenio = await Ordenio.findByPk(id);

        if (ordenio) {
            res.json(ordenio);
        } else {
            res.status(404).json({ msg: 'No existe ordenio con el id: ' + id });
        }

    } catch (err) {
        res.json({
            msg: err,
        })
    }

}

export const postOrdenio = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        //guardar en base de datos
        const ordenio = await Ordenio.create(body);
        res.json(ordenio);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }

}

export const putOrdenio = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const ordenio = await Ordenio.findByPk(id);
        if (!ordenio) {
            return res.status(404).json({
                msg: 'No existe un ordenio con el id: ' + id
            });
        }
        await ordenio.update(body);
        res.json(ordenio);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}

export const deleteOrdenio = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const ordenio = await Ordenio.findByPk(id);
        if (!ordenio) {
            return res.status(404).json({
                msg: 'No existe un ordenio con el id: ' + id
            });
        }
        await ordenio.update({ estado: false });
        res.json({ ordenio });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}
