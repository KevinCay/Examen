const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  dialectOptions:{
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  //operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//tabla 
db.Ejemplo = require('../models/ejemplo.model.js')(sequelize, Sequelize);
//tabla usuario
db.Usuario = require('../models/usuario.model.js')(sequelize, Sequelize);
//tabla proyectos
db.Proyecto = require('../models/proyecto.model.js')(sequelize, Sequelize);
//tabla tares
db.Tarea = require('../models/tarea.model.js')(sequelize, Sequelize);


module.exports = db;