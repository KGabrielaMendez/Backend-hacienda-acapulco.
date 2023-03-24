import { DataTypes } from 'sequelize';
import db from '../db/config';
import Ocupacion from './ocupacion';
import Rol from './rol';

const Usuario = db.define('Usuarios', {
    nombre_usr: {
        type: DataTypes.STRING,
      },
      apellido_usr: {
        type: DataTypes.STRING,
      },
      nombre_completo: {
        type: DataTypes.STRING,
      },
      genero_usr: {
        type: DataTypes.STRING,
        values: ['masculino', 'femenino', 'otro']
      },
      telefono_usr: {
        type: DataTypes.STRING,
      },
      cedula_usr: {
        type: DataTypes.STRING,
      },
      direccion_usr: {
        type: DataTypes.STRING,
      },
      email_usr: {
        type: DataTypes.STRING,
        validate: {
        isEmail: true, 
        }
      },
      fecha_nac_usr: {
        type: DataTypes.DATEONLY,        
      },
      fecha_ingreso: {
        type: DataTypes.DATEONLY,
      },
      usuario: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      estado: {
        type: DataTypes.STRING,
        
      },
      
});
    //foreign keys
    Ocupacion.hasMany(Usuario, {foreignKey: 'id_ocupacion'});
    Usuario.belongsTo(Ocupacion,{foreignKey: 'id_ocupacion'});

    Rol.hasMany(Usuario, {foreignKey: 'id_rol'});
    Usuario.belongsTo(Rol,{foreignKey: 'id_rol'});
     
      
export default Usuario;