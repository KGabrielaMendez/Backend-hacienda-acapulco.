import { Request, Response } from "express";
import { QueryTypes } from 'sequelize';
import sequelize from '../db/config';






export const findByGroup = async (req: Request, res: Response) => {
    const { grupo } = req.params;
    console.log('esto--------------------------',grupo);
    try {
        const datosgrupos = await sequelize.query(
            "SELECT Ga.arete_gan, Ga.tipo_gan, Ga.fechanac_gan, Ga.sexo_gan, R.nombre_ra, observacion_gan FROM Ganado Ga, Grupo Gr, Raza R WHERE Ga.id_grupo = Gr.id and Ga.id_raza= R.id and Gr.nombre_gru= $1",
            {
                bind: [grupo],
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






