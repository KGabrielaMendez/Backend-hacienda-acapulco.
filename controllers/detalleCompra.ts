
import { Request, Response } from "express";
import { QueryTypes } from 'sequelize';
import sequelize from '../db/config';
import DetallesCompra from "../models/detalles_compra";

export const getDetalleCompra = async (req: Request, res: Response) => {
   const {id}= req.params;
    try {
        const compraventa = await sequelize.query(
            "select * from detalle_compra where id_nego=($1)",
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

export const postDetalleCompra = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        //guardar en base de datos
        const grupo = await DetallesCompra.create(body);
        res.json(grupo);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Error 500 hable con el administrador ${res.status}` ,
            error: error
        });
    }
}


export const getDetailCompra = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const compraventa = await sequelize.query(
            "select d.*,c.* from detalle_compra d, negociacion_ganado n, comerciante c where d.id_negoS=n.id  and n.id_comerciante=c.id and d.id_nego=$1",
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