import { Request, Response } from "express";
import Ordenio from '../models/ordenio';
import sequelize from '../db/config';
import { QueryTypes } from "sequelize";


export const getOrdeniosByDate = async (req: Request, res: Response) => {
    const { fecha } = req.params;
    try {
        const ordenios = await sequelize.query(
            "select fecha_ord as dia, litros_ord, numerovacas_ord from ordenio where extract(year from fecha_ord) = year($1) and extract(month from fecha_ord) = month($1) order by  fecha_ord ",
             {
                bind: [fecha],
                nest:true,
                type: QueryTypes.SELECT
            }
        );
        res.json(ordenios);
    } catch (err) {
        res.status(500).json({
            message: "error a traer los datos de la base",
            error: err
        })
    }
}

export const getOrdenios = async (req: Request, res: Response) => {
  const {id} = req.params;
    try {
        const ordenios = await sequelize.query(
            "select id , fecha_ord,'%d - %b - %Y') as 'Fecha' , litros_ord as 'Litros_Totales', numerovacas_ord as Vacas_Ordeniadas from ordenio",
            {
                nest:true,
                type: QueryTypes.SELECT
            }
        )
      //validaciones para usuarios autenticados
        //  const usuarioAutenticado = req.usuario;
     //   res.json({ ordenios, usuarioAutenticado });
        res.json({ ordenios });
     
    } catch (err) {
        res.status(500).json({
            message: "error a traer los datos de la base",
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
            message: err,
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
            res.status(404).json({ message: 'No existe ordenio con el id: ' + id });
        }

    } catch (err) {
        res.json({
            message: err,
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
            message: 'hable con el administrador ',
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
            message: 'hable con el administrador ',
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
                message: 'No existe un ordenio con el id: ' + id
            });
        }
        await ordenio.update({ estado: false });
        res.json({ ordenio });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'hable con el administrador ',
            error: error
        });
    }
}
