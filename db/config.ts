import {Sequelize} from 'sequelize';
import dotenv from 'dotenv'
// /config de env
dotenv.config();

console.log(process.env.DB)
const db= new Sequelize(process.env.DB || 'node-tsc',process.env.DB_USER||'root',process.env.DB_PASSWORD ||'kakaroto',{
  host: process.env.DB_HOST||'localhost',
  dialect:'mysql',
  dialectOptions: {
    ssl: {
        rejectUnauthorized: true,        
    }
}
    // logging:false
})

export default db;