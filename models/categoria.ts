import { DataTypes } from 'sequelize';
import db from '../db/config';

const Categoria = db.define('categoria', {
    nombre: {
        type: DataTypes.STRING,
        allowNull:false,
      }
    });
    export default Categoria;