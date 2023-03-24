import { Sequelize } from "sequelize";

const db = new Sequelize('hacienda_acapulco','root','password',{
   host: 'localhost',
   dialect: 'mysql',
   define: {
    freezeTableName: true
   }


   
  // logging:false
});

export default db;