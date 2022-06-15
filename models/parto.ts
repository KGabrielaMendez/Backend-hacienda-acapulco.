import { DataTypes } from 'sequelize';
import db from '../db/config';
import Ganado from './ganado';
import Raza from './raza';

const Parto = db.define('Partos', {
    tipo_gan: {
        type: DataTypes.DATEONLY,
        allowNull:false,
        defaultValue: ['bovino', 'equino']
      },
      fecha_pa: {
        type: DataTypes.DECIMAL,
        allowNull:false,
      },
      sexocria_pa: {
        type: DataTypes.INTEGER,
        allowNull:false,
      },
      estadocria_pa: {
        type: DataTypes.STRING,
      },
      numarete_cria: {
        type: DataTypes.STRING,
        defaultValue: null
      },
      nombre_gan: {
          type: DataTypes.STRING,
          defaultValue: null
      },
      observacion_pa: {
        type: DataTypes.STRING,
        defaultValue: null
    }
    });

    Ganado.hasMany(Parto, {foreignKey: 'id_gan'});
    Parto.belongsTo(Ganado,{foreignKey: 'id_gan'});

    Raza.hasMany(Parto, {foreignKey: 'id_raza'});
    Parto.belongsTo(Raza,{foreignKey: 'id_raza'});


      
export default Parto;