import { Request, Response } from "express";
import Grupo from '../models/grupo';
import Ganado from './../models/ganado';
import { QueryTypes } from 'sequelize';
import sequelize from './../db/config';



export const getGrupos = async (req: Request, res: Response) => {
    try {
        const grupos = await Grupo.findAll();
        res.json(grupos);
    } catch (err) {
        res.json({
            msg: err,
        })
    }
}

export const getGrupo = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const grupo = await Grupo.findByPk(id);

        if (grupo) {
            res.json(grupo);
        } else {
            res.status(404).json({ msg: 'No existe grupo con el id: ' + id });
        }

    } catch (err) {
        res.json({
            msg: err,
        })
    }

}

export const postGrupo = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        //guardar en base de datos
        const grupo = await Grupo.create(body);
        res.json(grupo);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }

}

export const putGrupo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const grupo = await Grupo.findByPk(id);
        if (!grupo) {
            return res.status(404).json({
                msg: 'No existe un grupo con el id: ' + id
            });
        }
        await grupo.update(body);
        res.json(grupo);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}

export const deleteGrupo = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const grupo = await Grupo.findByPk(id);
        if (!grupo) {
            return res.status(404).json({
                msg: 'No existe un grupo con el id: ' + id
            });
        }
        await grupo.destroy();;
        res.json({ grupo });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
};

export const getGanadoBovinoList = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const datosgrupos = await sequelize.query(
            "select  g.id, g.arete_gan, g.tipo_gan, g.estado, g.fechanac_gan, g.sexo_gan, gr.nombre_gru, r.nombre_ra , g.nombre_gan, id_raza, id_grupo ,observacion_gan from ganado g, grupo gr,raza r WHERE gr.id=g.id_grupo and g.id_raza= r.id and estado=1 and g.tipo_gan='bovino'",
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
export const getGanadoEquinoList = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const datosgrupos = await sequelize.query(
            "select  g.id, g.arete_gan, g.tipo_gan, g.estado, g.fechanac_gan, g.sexo_gan, gr.nombre_gru, r.nombre_ra , g.nombre_gan, id_raza, id_grupo ,observacion_gan from ganado g, grupo gr,raza r WHERE gr.id=g.id_grupo and g.id_raza= r.id and estado=1 and g.tipo_gan='equino'",
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
