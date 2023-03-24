import { DataTypes } from 'sequelize';
import db from '../db/config';
import Negociacion from './negociacion';
import Usuario from './usuario';

const Pagos = db.define('pagos_negociacion', {
    cantidad: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    }

});

Negociacion.hasMany(Pagos, { foreignKey: 'id_negociacion' });
Pagos.belongsTo(Negociacion, { foreignKey: 'id_negociacion' });

Usuario.hasMany(Pagos, { foreignKey: 'id_usuario' });
Pagos.belongsTo(Usuario, { foreignKey: 'id_usuario' });



export default Pagos;