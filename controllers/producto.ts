import { Request, Response } from "express";
import Producto from './../models/producto';
import { QueryTypes } from 'sequelize';
import sequelize from '../db/config';


export const getProductos = async (req: Request, res: Response) => {
    try {
        const productos = await sequelize.query(
            "select p.*, c.nombre as categoria_pro from productos p inner join categoria c where id_categoria = c.id",
            {
                nest: true,
                type: QueryTypes.SELECT
            }
        );
        res.json(productos);
    } catch (err) {
        res.json({
            msg: err,
        })
    }
}

export const getProducto = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const producto = await Producto.findByPk(id);

        if (producto) {
            res.json(producto);
        } else {
            res.status(404).json({ msg: 'No existe producto con el id: ' + id });
        }

    } catch (err) {
        res.json({
            msg: err,
        })
    }

}

export const postProducto = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        //guardar en base de datos
        const producto = await Producto.create(body);
        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }

}

export const putProducto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const producto = await Producto.findByPk(id);
        if (!producto) {
            return res.status(404).json({
                msg: 'No existe un producto con el id: ' + id
            });
        }
        await producto.update(body);
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}

export const deleteProducto = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return res.status(404).json({
                msg: 'No existe un producto con el id: ' + id
            });
        }
        await producto.update({ estado: false });
        res.json({ producto });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador ',
            error: error
        });
    }
}
