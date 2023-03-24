import { DataTypes } from 'sequelize';
import db from '../db/config';
import Categoria from './categoria';

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
      estado: {
          type: DataTypes.BOOLEAN,
          defaultValue: 1,
      }
    });

      
    
    Categoria.hasMany(Producto, {foreignKey: 'id_raza'});
    Producto.belongsTo(Categoria,{foreignKey: 'id_raza'});
    export default Producto;