import {Sequelize} from 'sequelize';

const db= new Sequelize(process.env.DB || 'node-tsc',process.env.DB_USER||'root',process.env.DB_PASSWORD ||'kakaroto',{
  host: process.env.DB_HOST||'localhost',
  dialect:'mysql'
    // logging:false
})

export default db;