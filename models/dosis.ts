import { DataTypes } from 'sequelize';
import db from '../db/config';

const Dosis = db.define('Dosis', {
      dosis: {
        type: DataTypes.STRING,
        allowNull:false,
      },
    });

      
export default Dosis;