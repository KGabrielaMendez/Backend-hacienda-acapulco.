import { DataTypes } from 'sequelize';
import db from '../db/config';

const Producto = db.define('Productos', {
    nombre_pro: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      descripcion_pro: {
        type: DataTypes.STRING,
        allowNull:true,
      },
      categoria_pro: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      udM: {
        type: DataTypes.STRING,
      },
      estado: {
          type: DataTypes.BOOLEAN,
          defaultValue: 1,
      }
    });

      
export default Producto;