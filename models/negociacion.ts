import { DataTypes } from 'sequelize';
import db from '../db/config';
import Comerciante from './comerciante';

const Negociacion = db.define('negociacion_ganado', {

    tipo_negociacion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_negociacion: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    precio_negociacion: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    estado_negociacion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    valores_pagados: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    valores_pendientes_nego: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    destare: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    subtotal: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    total_kilos:{
        type: DataTypes.INTEGER,
        allowNull: true,
    }
});

Comerciante.hasMany(Negociacion, {foreignKey:'id_comerciante'});
Negociacion.belongsTo(Comerciante,{foreignKey: 'id_comerciante'});



 
export default Negociacion;