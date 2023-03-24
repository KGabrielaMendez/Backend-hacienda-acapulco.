
import { Request, Response } from "express";
import { QueryTypes } from 'sequelize';
import sequelize from './../db/config';
import Negociacion from "../models/negociacion";
import Pagos from "../models/pagos";

export const getVentaGanado = async (req: Request, res: Response) => {
    try {
        const compraventa = await sequelize.query(
            "select n.*, c.nombre_com ,c.telefono_com from comerciante c, negociacion_ganado n where c.id=n.id_comerciante ",
            {
                nest: true,
                type: QueryTypes.SELECT
            }
        );
        res.json(compraventa);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: err
        });
    }
}

export const postVenta = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        //guardar en base de datos
        const grupo = await Negociacion.create(body);
        res.json(grupo);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Error 500 hable con el administrador ${res.status}` ,
            error: error
        });
    }

}

export const getNegociacion = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const compraventa = await sequelize.query(
                `select n.*, c.nombre_com ,c.telefono_com from comerciante c, negociacion_ganado n where c.id=n.id_comerciante and n.id=$1`,
                {
                    bind:[id],
                    nest: true,
                    type: QueryTypes.SELECT
                }
            );
            res.json(compraventa);
        }
        catch (err) {
            console.log(err);
            res.status(500).json({
                msg: 'hable con el administrador ',
                error: err
            });
        }
    
    }

export const putVenta = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const compraventa = await Negociacion.findByPk(id);
        if (!compraventa) {
            return res.status(404).json({
                msg: 'No existe un entrada con el id: ' + id
            });
        }
        await compraventa.update(body);
        res.json(compraventa);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}


export const getDetailVenta = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const compraventa = await sequelize.query(
            "select d.*,n.*,c.*,g.id,g.arete_gan,g.sexo_gan,g.id_raza,r.nombre_ra from detalle_negociacion d, negociacion_ganado n, ganado g, raza r, comerciante c where d.id_negociacion=n.id and g.id_raza = r.id and d.id_ganado = g.id and n.id_comerciante=c.id and n.id=$1",
            {
                bind:[id],
                nest: true,
                type: QueryTypes.SELECT
            }
        );
        res.json(compraventa);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: err
        });
    }
}

export const postPagos = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        //guardar en base de datos
        const pago = await Pagos.create(body);
        res.json(pago);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Error 500 hable con el administrador ${res.status}` ,
            error: error
        });
    }

}

export const getPagos = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const compraventa = await sequelize.query(
            "select p.*, n.valores_pendientes_nego, n.precio_negociacion, u.nombre_completo from pagos_negociacion p, negociacion_ganado n, usuarios u where p.id_negociacion = n.id and p.id_usuario= u.id  and id_negociacion=($1)",
            {
                bind:[id],
                nest: true,
                type: QueryTypes.SELECT
            }
        );
        res.json(compraventa);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: err
        });
    }
}
/* export const postCompraVentaGanado = async (req: Request, res: Response) => {
    const { body } = req.body;
    try {
        const idCV = await sequelize.query(
            "INSERT INTO `bdd_acapulco`.`negociacion_ganado` (`tipo_negociacion`, `id_comerciante`, `fecha_negociacion`, `precio_negociacion`, `estado_negociacion`, `valores_pagados`) VALUES (?, ?, ?, ?, ?, ?); SELECT LAST_INSERT_ID();",
            {
                bind: [{estado:'0',motivodesc_gan:motivodesc_gan,fechadesc_gan:fechadesc_gan}],
                nest: true,
                type: QueryTypes.SELECT
            }
        );
        res.json(idCV);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: err
        });
    }
}
 */