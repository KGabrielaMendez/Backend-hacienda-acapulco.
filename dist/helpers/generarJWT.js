"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarJWT = void 0;
const jwt = require('jsonwebtoken');
const generarJWT = (id = '') => {
    return new Promise((resolve, reject) => {
        const payload = { id };
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generarJWT = generarJWT;
//# sourceMappingURL=generarJWT.js.map