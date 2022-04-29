import dotenv from 'dotenv'
import Server from './models/server';
// /config de env
dotenv.config();

const server=new Server();

server.listen();