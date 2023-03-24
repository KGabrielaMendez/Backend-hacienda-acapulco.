import { DataTypes } from 'sequelize';
import db from '../db/config';
import Dosis from './dosis';
import Ganado from './ganado';
import Grupo from './grupo';

const Plansanitario = db.define('plan_sanitario', {
     
    fecha_inicio: {
        type: DataTypes.DATEONLY,
        allowNull:false,
      },
      descripcion_ps: {
          type: DataTypes.STRING,
          allowNull:false,
      },
      estado: {
          type: DataTypes.STRING,
          allowNull:false,
      },
    });
    Grupo.hasMany(Plansanitario, {foreignKey: 'id_gru'});
    Plansanitario.belongsTo(Grupo,{foreignKey: 'id_gru'});

    Ganado.hasMany(Plansanitario, {foreignKey: 'id_ganado'});
    Plansanitario.belongsTo(Ganado,{foreignKey: 'id_ganado'});
    
    Dosis.hasMany(Plansanitario, {foreignKey: 'id_dosis'});
    Plansanitario.belongsTo(Dosis,{foreignKey: 'id_dosis'});


      
export default Plansanitario;