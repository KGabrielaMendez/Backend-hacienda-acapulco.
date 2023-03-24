import { Request, Response } from "express";
import Categoria from './../models/categoria';


export const getCategorias = async (req: Request, res: Response) => {
    try {
        const razas = await Categoria.findAll();
        res.json(razas);
    } catch (err) {
        res.json({
            msg: err,
        })
    }
}