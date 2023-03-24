import { DataTypes } from 'sequelize';
import db from '../db/config';
import Ganado from './ganado';
import Negociacion from './negociacion';

const DetallesNegociacion = db.define('detalle_negociacion', {

    observaciones_det_neg: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    peso_kg: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    precio_libra: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    peso_libras: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    precio_total: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    }
});

Negociacion.hasMany(DetallesNegociacion, {foreignKey:'id_negociacion'});
DetallesNegociacion.belongsTo(Negociacion,{foreignKey: 'id_negociacion'});

Ganado.hasMany(DetallesNegociacion, {foreignKey:'id_ganado'});
DetallesNegociacion.belongsTo(Ganado,{foreignKey: 'id_ganado'});



 
export default DetallesNegociacion;