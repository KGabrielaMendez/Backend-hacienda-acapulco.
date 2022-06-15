"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./../db/config"));
const usuario_1 = __importDefault(require("./../routes/usuario"));
const ocupacion_1 = __importDefault(require("./../routes/ocupacion"));
const rol_1 = __importDefault(require("./../routes/rol"));
const producto_1 = __importDefault(require("./../routes/producto"));
const entrada_1 = __importDefault(require("./../routes/entrada"));
const salida_1 = __importDefault(require("./../routes/salida"));
const ganado_1 = __importDefault(require("./../routes/ganado"));
const comerciante_1 = __importDefault(require("./../routes/comerciante"));
const ordenio_1 = __importDefault(require("./../routes/ordenio"));
const controlmensual_1 = __importDefault(require("./../routes/controlmensual"));
const plansanitario_1 = __importDefault(require("./../routes/plansanitario"));
const pesaje_1 = __importDefault(require("./../routes/pesaje"));
const partos_1 = __importDefault(require("./../routes/partos"));
//import plansanitarioRoutes  from '../routes/plansanitario';
const raza_1 = __importDefault(require("../routes/raza"));
const grupo_1 = __importDefault(require("../routes/grupo"));
//listado con nombres de tablas relacionales
const consultasGanado_1 = __importDefault(require("../routes/consultasGanado"));
//probando
const buscar_1 = __importDefault(require("../routes/buscar"));
class Server {
    constructor() {
        //propiedad para definir las rutas de la app
        this.apiPaths = {
            //modulo de usuarios
            usuarios: '/api/usuarios',
            ocupaciones: '/api/ocupaciones',
            roles: '/api/roles',
            //modulo de inventario
            producto: '/api/productos',
            entrada: '/api/entradas',
            salida: '/api/salidas',
            //modulo ganado
            ganado: '/api/ganado',
            comerciante: '/api/comerciante',
            ordenio: '/api/ordenio',
            controlmensual: '/api/controlmensual',
            pesaje: '/api/pesaje',
            partos: '/api/partos',
            plansanitario: '/api/plansanitario',
            grupo: '/api/grupo',
            raza: '/api/raza',
            //consulta con tablas relacionales
            ganadogrupo: '/api/ganadogrupo',
            //consulta por grupos
            //    grupog: '/api/grupog',
            buscarRoutes: '/api/buscar',
            //buscar
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        //dbConnection
        this.dbConnection();
        //metodos iniciales
        this.middlewares();
        //definir rutas de la app
        this.routes();
    }
    ;
    //conexion con la base de datos
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield config_1.default.authenticate();
                console.log('db online');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    //middlewares son funciones que se ejecutan antes de las rutas
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)());
        //lectura del body
        this.app.use(express_1.default.json());
        //carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        //modulo de usuarios
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
        this.app.use(this.apiPaths.ocupaciones, ocupacion_1.default);
        this.app.use(this.apiPaths.roles, rol_1.default);
        //modulo de control de inventarios
        this.app.use(this.apiPaths.producto, producto_1.default);
        this.app.use(this.apiPaths.entrada, entrada_1.default);
        this.app.use(this.apiPaths.salida, salida_1.default);
        //modulo ganado
        this.app.use(this.apiPaths.ganado, ganado_1.default);
        this.app.use(this.apiPaths.comerciante, comerciante_1.default);
        this.app.use(this.apiPaths.ordenio, ordenio_1.default);
        this.app.use(this.apiPaths.controlmensual, controlmensual_1.default);
        this.app.use(this.apiPaths.pesaje, pesaje_1.default);
        this.app.use(this.apiPaths.plansanitario, plansanitario_1.default);
        this.app.use(this.apiPaths.raza, raza_1.default);
        this.app.use(this.apiPaths.grupo, grupo_1.default);
        this.app.use(this.apiPaths.partos, partos_1.default);
        //ruta del ganado con nombre de grupo y raza
        this.app.use(this.apiPaths.ganadogrupo, consultasGanado_1.default);
        //ruta de consulta por grupo
        ///sd
        this.app.use(this.apiPaths.buscarRoutes, buscar_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server corriendo en puerto: ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map