import { DataTypes } from 'sequelize';
import db from '../db/config';
import Grupo from './grupo';
import Raza from './grupo';

const Ganado = db.define('Ganado', {
    tipo_gan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    arete_gan: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    nombre_gan: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    fechanac_gan: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    sexo_gan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    observacion_gan: {
        type: DataTypes.STRING,
        defaultValue: null,
    },
    motivodesc_gan: {
        type: DataTypes.STRING,
        defaultValue: null,
    },
    fechadesc_gan: {
        type: DataTypes.DATEONLY,
        defaultValue: null,
    },
});
    Raza.hasMany(Ganado, {foreignKey: 'id_raza'});
    Ganado.belongsTo(Raza,{foreignKey: 'id_raza'});

    Grupo.hasMany(Ganado, {foreignKey: 'id_grupo'});
    Ganado.belongsTo(Grupo,{foreignKey: 'id_grupo'});


 
export default Ganado;