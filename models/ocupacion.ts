import { DataTypes } from 'sequelize';
import db from '../db/config';

const Ocupacion = db.define('Ocupacion', {
    ocupacion: {
        type: DataTypes.STRING,
        allowNull:false
      },
});
    
      
export default Ocupacion;