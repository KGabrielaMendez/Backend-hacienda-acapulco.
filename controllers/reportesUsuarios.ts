import { Request, Response } from "express";
import sequelize from '../db/config';
import { QueryTypes } from "sequelize";
//Toros Listos para la venta
export const getAniosServicio = async (req: Request, res: Response) => {
    try {
        const servicio = await sequelize.query(
            "select u.id,nombre_completo, cedula_usr, o.ocupacion, (year(curdate())-  year(fecha_ingreso))as anios_servicio from usuarios u, ocupacion o where u.id_ocupacion=o.id and u.estado=1",
             {
                nest:true,
                type: QueryTypes.SELECT
            }
        );
        res.json(servicio);
    } catch (err) {
        res.json({
            msg: err,
        })
    }
}

export const getEdad = async (req: Request, res: Response) => {
    
    try {
        const salidas = await sequelize.query(
            " select u.id,nombre_completo, cedula_usr, o.ocupacion, (year(curdate())-  year(fecha_nac_usr))as edad from usuarios u, ocupacion o where u.id_ocupacion=o.id and u.estado=1",
             {
                nest:true,
                type: QueryTypes.SELECT
            }
        );
        res.json(salidas);
    } catch (err) {
        res.json({
            msg: err,
        })
    }
}