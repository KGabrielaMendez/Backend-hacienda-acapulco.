import { DataTypes } from 'sequelize';
import db from '../db/config';

const Grupo = db.define('Grupo', {
      nombre_gru: {
        type: DataTypes.STRING,
        allowNull:false,
      },
    });

      
export default Grupo;