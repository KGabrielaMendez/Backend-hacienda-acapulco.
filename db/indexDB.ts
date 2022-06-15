import Producto from '../models/producto';
import Entrada from './../models/entrada';


Producto.hasMany(Entrada, {foreignKey: 'id_producto'});
Entrada.belongsTo(Producto);

export default {
    Producto,
    Entrada
}