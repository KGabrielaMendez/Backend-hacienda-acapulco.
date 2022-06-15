import { DataTypes } from 'sequelize';
import db from '../db/config';

const Raza = db.define('Raza', {
      nombre_ra: {
        type: DataTypes.STRING,
        allowNull:false,
      },
    });

      
export default Raza;