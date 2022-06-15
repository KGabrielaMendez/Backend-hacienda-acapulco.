import { DataTypes } from 'sequelize';
import db from '../db/config';

const Comerciante = db.define('Comerciante', {

    nombre_com: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ruc_com: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    direccion_com: {
        type: DataTypes.STRING,
    },
    telefono_com: {
        type: DataTypes.STRING,
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

 
export default Comerciante;