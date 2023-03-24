import { Request, Response } from "express";
import sequelize from '../db/config';
import { QueryTypes } from "sequelize";
import Salida from "../models/salida";
//Toros Listos para la venta
export const getTorosVenta = async (req: Request, res: Response) => {
    const { fecha_inicio, fecha_fin } = req.params;
    try {
        const salidas = await sequelize.query(
            "select arete_gan, fechanac_gan, r.nombre_ra,gr.nombre_gru from ganado G, raza r, grupo gr where r.id=G.id_raza and gr.id=g.id_grupo and sexo_gan='macho' and tipo_gan='bovino' and fechanac_gan>= ($1) and fechanac_gan<= ($2) and estado= 1",
             {
                bind:[fecha_inicio,fecha_fin],
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

export const getTorosVentaAnio = async (req: Request, res: Response) => {
    const { fecha } = req.params;
    try {
        const salidas = await sequelize.query(
            "    select arete_gan, fechanac_gan, r.nombre_ra,gr.nombre_gru from ganado G, raza r, grupo gr where r.id=G.id_raza and gr.id=g.id_grupo and sexo_gan='macho' and tipo_gan='bovino' and year(fechanac_gan)= ($1) and estado= 1",
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
export const getPendientesMes = async (req: Request, res: Response) => {
    const { fecha} = req.params;
    try {
        const salidas = await sequelize.query(
            "select N.fecha_negociacion,C.nombre_com,C.telefono_com,C.direccion_com, N.valores_pendientes_nego from negociacion_ganado N INNER JOIN comerciante C on (N.id_comerciante=C.id) where estado_negociacion = 'pendiente' and month(fecha_negociacion)>=month($1) and year(fecha_negociacion)=year($1)",
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

export const getPendientesFechas = async (req: Request, res: Response) => {
    const { fecha_inicio, fecha_fin } = req.params;
    try {
        const salidas = await sequelize.query(
            "select N.fecha_negociacion,C.nombre_com,C.telefono_com,C.direccion_com, N.valores_pendientes_nego from negociacion_ganado N INNER JOIN comerciante C on (N.id_comerciante=C.id) where estado_negociacion = 'pendiente' and fecha_negociacion>=($1) and fecha_negociacion<=($2)",
             {
                bind:[fecha_inicio, fecha_fin],
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

export const getGanadoVendido = async (req: Request, res: Response) => {
    const { fecha_inicio, fecha_fin } = req.params;
    try {
        const salidas = await sequelize.query(
            "select * from ganado where motivodesc_gan='vendido' and fechadesc_gan>=($1) and fechadesc_gan<=($2)",
             {
                bind:[fecha_inicio, fecha_fin],
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

export const getDescarteGanado = async (req: Request, res: Response) => {
    const { fecha_inicio, fecha_fin } = req.params;
    try {
        const salidas = await sequelize.query(
            "select * from ganado where motivodesc_gan!='vendido' and fechadesc_gan>=($1) and fechadesc_gan<=($2)",
             {
                bind:[fecha_inicio, fecha_fin],
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

export const getGanadoEquino = async (req: Request, res: Response) => {
    const { fecha_inicio, fecha_fin } = req.params;
    try {
        const salidas = await sequelize.query(
            "select * from ganado where tipo_gan='equino' and estado=1 and fechanac_gan>=($1) and fechanac_gan<=($2)",
             {
                bind:[fecha_inicio, fecha_fin],
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

