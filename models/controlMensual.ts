import { DataTypes } from 'sequelize';
import db from '../db/config';

const ControlMensual = db.define('ControlMensual', {

    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    litros_mensuales: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    precio_litro: {
        type: DataTypes.DECIMAL,
    },
    pago_mensual: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        defaultValue: true,
    },

      //foraneas
/**
 *  id_raza
 * id_grupo
 * */
});

 
export default ControlMensual;