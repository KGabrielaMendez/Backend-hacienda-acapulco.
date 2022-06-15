
import express, {Application} from 'express';
import cors from 'cors';
import db from './../db/config';


import userRoutes from './../routes/usuario';
import ocupacionRoutes from './../routes/ocupacion';
import rolRoutes from './../routes/rol';

import productoRoutes from './../routes/producto';
import entradaRoutes from './../routes/entrada';
import salidaRoutes from './../routes/salida';

import ganadoRoutes from './../routes/ganado';
import comercianteRoutes from './../routes/comerciante';
import ordenioRoutes from './../routes/ordenio';
import controlMensualRoutes from './../routes/controlmensual';

import plansanitarioRoutes from './../routes/plansanitario';

import pesajeRoutes from './../routes/pesaje';
import partosRoutes from './../routes/partos';
//import plansanitarioRoutes  from '../routes/plansanitario';
import razaRoutes  from '../routes/raza';
import grupoRoutes  from '../routes/grupo';
//listado con nombres de tablas relacionales
import consultaGanadoRoutes from '../routes/consultasGanado';

//probando
import buscarRoutes from '../routes/buscar';




 class Server {
     private app: Application;
    private port: string;
    //propiedad para definir las rutas de la app
    private apiPaths = {
        //modulo de usuarios
        usuarios:       '/api/usuarios',
        ocupaciones:    '/api/ocupaciones',
        roles:          '/api/roles',
        //modulo de inventario
        producto:       '/api/productos',
        entrada:        '/api/entradas',
        salida:         '/api/salidas',
        //modulo ganado
        ganado:         '/api/ganado',
        comerciante:    '/api/comerciante',
        ordenio:        '/api/ordenio',
        controlmensual: '/api/controlmensual',
        pesaje:         '/api/pesaje',
        partos:         '/api/partos',
        plansanitario:  '/api/plansanitario',
        grupo:          '/api/grupo',
        raza:           '/api/raza',

        //consulta con tablas relacionales
        ganadogrupo:    '/api/ganadogrupo',

        //consulta por grupos
    //    grupog: '/api/grupog',

        buscarRoutes:   '/api/buscar',
        //buscar

    }


     constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
       //dbConnection
       this.dbConnection();
        //metodos iniciales
        this.middlewares();
        //definir rutas de la app
        this.routes();
        
     };

     //conexion con la base de datos
     async dbConnection() {
         try {
            await db.authenticate();
            console.log('db online')
         } catch(error:any){
             throw new Error(error);
         }
     }
     //middlewares son funciones que se ejecutan antes de las rutas
     middlewares() {
         //CORS
        this.app.use( cors());
         //lectura del body
         this.app.use(express.json());
         //carpeta publica
        this.app.use(express.static('public'));
     }
     routes () {
         //modulo de usuarios
         this.app.use(this.apiPaths.usuarios, userRoutes);
         this.app.use(this.apiPaths.ocupaciones, ocupacionRoutes);
         this.app.use(this.apiPaths.roles, rolRoutes);
         //modulo de control de inventarios
         this.app.use(this.apiPaths.producto, productoRoutes);
         this.app.use(this.apiPaths.entrada, entradaRoutes);
         this.app.use(this.apiPaths.salida, salidaRoutes);
         //modulo ganado
         this.app.use(this.apiPaths.ganado, ganadoRoutes);
         this.app.use(this.apiPaths.comerciante, comercianteRoutes);
         this.app.use(this.apiPaths.ordenio, ordenioRoutes);
         this.app.use(this.apiPaths.controlmensual, controlMensualRoutes);
         this.app.use(this.apiPaths.pesaje, pesajeRoutes);
         this.app.use(this.apiPaths.plansanitario, plansanitarioRoutes);
         this.app.use(this.apiPaths.raza, razaRoutes);
         this.app.use(this.apiPaths.grupo, grupoRoutes);
         this.app.use(this.apiPaths.partos, partosRoutes);

        //ruta del ganado con nombre de grupo y raza
         this.app.use(this.apiPaths.ganadogrupo, consultaGanadoRoutes);
         //ruta de consulta por grupo

         ///sd
         this.app.use(this.apiPaths.buscarRoutes, buscarRoutes);
         
     }
     listen () {
         this.app.listen( this.port, () => {
             console.log('Server corriendo en puerto: '+this.port);

         })
     }
 }
 
 export default Server;