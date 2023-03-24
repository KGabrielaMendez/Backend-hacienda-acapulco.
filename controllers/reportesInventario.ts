import { Request, Response } from "express";
import sequelize from '../db/config';
import { QueryTypes } from "sequelize";
//Toros Listos para la venta
export const getProximoExpirar = async (req: Request, res: Response) => {
    const { mes } = req.params;
    try {
        const salidas = await sequelize.query(
            "select e.id, e.id_pro, lote, p.nombre_pro, fechaexp, cantidad from entrada e, productos p where e.id_pro=p.id and month(fechaexp)<=(month(curdate())+($1)) and year(fechaexp) = year(curdate())",
             {
                bind:[mes],
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

export const getExpirado = async (req: Request, res: Response) => {
    
    try {
        const salidas = await sequelize.query(
            " select e.id, e.id_pro, lote, p.nombre_pro, fechaexp, cantidad from entrada e, productos p where e.id_pro=p.id and fechaexp<= curdate() ",
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

export const getIngresosRecientes = async (req: Request, res: Response) => {
    const { fecha } = req.params;
    try {
        const salidas = await sequelize.query(
            "      select e.*, p.nombre_pro from entrada e, productos p where e.id_pro = p.id and fecha_entrada>=($1) ",
             {
                bind:[fecha],
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