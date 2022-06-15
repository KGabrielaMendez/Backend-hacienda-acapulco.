import { DataTypes } from 'sequelize';
import db from '../db/config';

const Rol = db.define('Rol', {
    tipo_rol: {
        type: DataTypes.STRING,
        allowNull:false
      },
});
      
export default Rol;