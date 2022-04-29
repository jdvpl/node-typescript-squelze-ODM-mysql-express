import {Sequelize} from 'sequelize';

const db= new Sequelize('node-tsc','root','kakaroto',{
  host: 'localhost',
  dialect:'mysql'
    // logging:false
})

export default db;