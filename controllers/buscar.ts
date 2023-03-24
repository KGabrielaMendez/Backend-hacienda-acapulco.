import { Response, Request } from 'express';
import Ganado from './../models/ganado';

const coleccionesPermitidas = [
    'ganado',
    'grupo',
    'raza',
]
const buscarProbando = async (termino = '', res: Response) => {
    const ganado = await Ganado.findByPk(termino);
    return res.json({
        results: (ganado) ? [ganado] : [],
    });

}

const buscar = (req: Request, res: Response) => {
    const { coleccion, termino } = req.params;

    if (!coleccionesPermitidas.includes(coleccion)) {
        return res.status(400).json({
            msg: `Las colecciones permitidas son: ${coleccionesPermitidas}`
        })
    }

    switch (coleccion) {
        case 'ganado':
            buscarProbando(termino, res);
            break;

        case 'grupo':

            break;
        case 'raza':

            break;

        default:
            res.status(500).json({
                msg: 'Se le olvido hacer esta busqueda'
            })
    }
}

export default 
    buscar ;