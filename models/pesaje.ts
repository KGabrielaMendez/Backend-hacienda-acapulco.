import { DataTypes } from 'sequelize';
import db from '../db/config';
import Ganado from './ganado';

const Pesaje = db.define('Pesaje', {
      fecha_pesaje: {
        type: DataTypes.DATEONLY,
        allowNull:false,
      },
      observacion_pesaje: {
        type: DataTypes.STRING,
        defaultValue: null
    }
    });
    
    Ganado.hasMany(Pesaje, {foreignKey: 'id_gan'});
    Pesaje.belongsTo(Ganado,{foreignKey: 'id_gan'});

      
export default Pesaje;