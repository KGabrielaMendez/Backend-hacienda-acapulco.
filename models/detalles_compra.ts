import { DataTypes } from 'sequelize';
import db from '../db/config';
import Negociacion from './negociacion';

const DetallesCompra = db.define('detalle_compra', {

    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    fecha_nac: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    precio_unitario: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    }
});

Negociacion.hasMany(DetallesCompra, {foreignKey:'id_nego'});
DetallesCompra.belongsTo(Negociacion,{foreignKey: 'id_nego'});



 
export default DetallesCompra;