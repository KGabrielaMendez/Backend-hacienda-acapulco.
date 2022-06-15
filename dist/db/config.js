"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('bdd_acapulco', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        freezeTableName: true
    }
    // logging:false
});
exports.default = db;
//# sourceMappingURL=config.js.map