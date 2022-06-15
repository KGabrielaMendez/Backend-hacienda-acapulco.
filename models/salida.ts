import { DataTypes } from 'sequelize';
import db from '../db/config';
import Entrada from './entrada';
import Usuario from './usuario';

const Salida = db.define('Salida', {
    fecha_salida: {
        type: DataTypes.DATEONLY,
        allowNull:false,
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull:false,
      },
      observacion: {
          type: DataTypes.STRING,
          defaultValue: null,
      },
      //foraneas
        //id_entrada
        //id_personal
    });
    Entrada.hasMany(Salida, {foreignKey: 'id_entrada'});
    Salida.belongsTo(Entrada,{foreignKey: 'id_entrada'});

    Usuario.hasMany(Salida, {foreignKey: 'id_usuario'});
    Salida.belongsTo(Usuario,{foreignKey: 'id_usuario'});


      
export default Salida;