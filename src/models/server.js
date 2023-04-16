const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../db/config');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT
    this.usuariosPath = '/api/usuarios'

    // connect to db
    this.conectarDB()

    // Middlewares -> Funciones que van a añadir funcionalidades a nuestro webserver
    this.middlewares();

    // Rutas de la aplicacion
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {

    // CORS
    this.app.use(cors());

    this.app.use(express.json());

    // directorio publico
    this.app.use(express.static('public'));


  }

  routes() {
    this.app.use(this.usuariosPath, require('../routes/usuarios'))

    this.app.get('*', (req, res) => {
      res.sendFile('404.html', { root: 'public' })
    })
  }

  listen() {

    this.app.listen(this.port, () => {
      console.log(`Server Ready http://localhost:${this.port}`);
    });

  }

}




module.exports = Server