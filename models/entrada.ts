import { DataTypes } from 'sequelize';
import db from '../db/config';
import Producto from './producto';

const Entrada = db.define('Entrada', {


    fecha_entrada: {
        type: DataTypes.DATEONLY,
        allowNull:false,
      },
      fechaexp: {
        type: DataTypes.DATEONLY,
        allowNull:true,
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull:false,
      },
      lote: {
        type: DataTypes.STRING,
      },
      observacion: {
          type: DataTypes.STRING,
          defaultValue: null,
      },
      //foraneas
      
    });
    Producto.hasMany(Entrada, {foreignKey: 'id_pro'});
    Entrada.belongsTo(Producto,{foreignKey: 'id_pro'});
  
    // Entrada.Producto = Entrada.belongsTo(Producto);
    // const Producto = sequelize.define('Producto', {foreignKey: 'id_producto'})

      
export default Entrada;