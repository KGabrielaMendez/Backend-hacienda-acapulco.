import {Request, Response} from 'express';
import sequelize from './../db/config';
import { QueryTypes } from 'sequelize';
import Entrada from '../models/entrada';


export const getInventario = async (req:Request, res:Response) => {
    try {
        const inventario = await sequelize.query(
            "select e.id, e.id_pro, p.nombre_pro, sum(e.cantidad ) as cantidad, p.id_categoria, c.nombre as categoria_pro from entrada e , productos p, categoria c where e.id_pro = p.id and p.id_categoria=c.id group by (e.id_pro)",
        {
            nest: true,
            type: QueryTypes.SELECT
        }
        );
        res.json(inventario);
    } catch (err) {
        res.json({
            msg: err,
        })
    }
}
//obtener detalles de las entradas de un producto
export const getDetallesInventario = async (req:Request, res:Response) => {
    const {id} = req.params;
    try {
        const inventario = await sequelize.query(
            "select id,cantidad,fecha_entrada, fechaexp,id_pro,lote,observacion  from entrada where id_pro=$1 order by fechaexp",
        {
            bind:[id],
            type: QueryTypes.SELECT
        }
        );
        res.json(inventario);
    } catch (err) {
        res.json({
            msg: `Hay un error ${err}`,
        })
    }
};

// agregar entrada de un producto
export const postEntrada = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        //guardar en base de datos
        const entrada = await Entrada.create(body);
        res.json(entrada);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }

}

