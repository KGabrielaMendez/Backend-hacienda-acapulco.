import { Request, Response } from "express";
import { QueryTypes } from 'sequelize';
import sequelize from '../db/config';

export const putDescarteGanado = async (req: Request, res: Response) => {
    const { id } = req.params;
    const {estado,motivodesc_gan,fechadesc_gan} = req.body;
    console.log(motivodesc_gan,"----------------------------------------");
    try {
        const results = await sequelize.query(
            
            "UPDATE ganado SET estado=?, motivodesc_gan = ?, fechadesc_gan = ? WHERE id = ?",
            {
                bind: [{estado:'0',motivodesc_gan:motivodesc_gan,fechadesc_gan:fechadesc_gan}],
                nest: true,
                type: QueryTypes.SELECT
            }
        );
        console.log(results,'--metadata-- ');
       // res.json(results);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'hable con el administrador...',
            error: error
        });
    }
}

export const DescartesGanado = async (req: Request, res: Response) => {
    
    try {
        const datosgrupos = await sequelize.query(
            "SELECT `id`,`arete_gan`,`nombre_gan`,`estado`, `motivodesc_gan`, `fechadesc_gan` from ganado",
            {
                nest: true,
                type: QueryTypes.SELECT
            }
        );
        res.json(datosgrupos);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: err
        });
    }
}