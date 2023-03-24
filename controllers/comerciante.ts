import { Request, Response } from "express";
import Comerciante from './../models/comerciante';
import { QueryTypes } from 'sequelize';
import sequelize from './../db/config';


export const getComerciantes = async (req: Request, res: Response) => {
    try {
        const comerciantes = await sequelize.query(
            "SELECT * FROM comerciante where estado=1",
            {
                type: QueryTypes.SELECT,
            }
        );
        res.json(comerciantes);
    } catch (err) {
        console.error(err);
        res.json({
            msg: `hable con el admin: ${res.status}`,

        })
    }
}

export const getComerciante = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const comerciante = await Comerciante.findByPk(id);

        if (comerciante) {
            res.json(comerciante);
        } else {
            res.status(404).json({ msg: 'No existe comerciante con el id: ' + id });
        }

    } catch (err) {
        res.json({
            msg: err,
        })
    }

}

export const postComerciante = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        //guardar en base de datos
        const comerciante = await Comerciante.create(body);
        res.json(comerciante);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }

}

export const putComerciante = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const comerciante = await Comerciante.findByPk(id);
        if (!comerciante) {
            return res.status(404).json({
                msg: 'No existe un comerciante con el id: ' + id
            });
        }
        await comerciante.update(body);
        res.json(comerciante);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}

export const deleteComerciante = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const comerciante = await Comerciante.findByPk(id);
        if (!comerciante) {
            return res.status(404).json({
                msg: 'No existe un comerciante con el id: ' + id
            });
        }
        await comerciante.update({ estado: false });
        res.json({ comerciante });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}
