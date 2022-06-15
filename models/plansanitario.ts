import { DataTypes } from 'sequelize';
import db from '../db/config';
import Grupo from './grupo';

const Plansanitario = db.define('plan_sanitario', {
     
    fecha_ps: {
        type: DataTypes.DATEONLY,
        allowNull:false,
      },
      descripcion_ps: {
          type: DataTypes.STRING,
          allowNull:false,
      },
      observacion_pesaje: {
        type: DataTypes.STRING,
        defaultValue: null
      },
      prox_vacuna: {
          type: DataTypes.DATEONLY,
          defaultValue: null
      },
    });
    Grupo.hasMany(Plansanitario, {foreignKey: 'id_gru'});
    Plansanitario.belongsTo(Grupo,{foreignKey: 'id_gru'});


      
export default Plansanitario;