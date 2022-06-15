import { DataTypes } from 'sequelize';
import db from '../db/config';

const Ordenio = db.define('Ordenio', {
    fecha_ord: {
        type: DataTypes.DATEONLY,
        allowNull:false,
      },
      litros_ord: {
        type: DataTypes.DECIMAL,
        allowNull:false,
      },
      numerovacas_ord: {
        type: DataTypes.INTEGER,
        allowNull:false,
      },
      observacion_ord: {
        type: DataTypes.STRING,
      },
    
    });

      
export default Ordenio;