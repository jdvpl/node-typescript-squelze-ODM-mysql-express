import express,{Application} from 'express';
import  userRoutes from '../routes/user.routes';
import cors from 'cors';
class Server{

  private app :Application;
  private port: string;
  private apiPath={
    users:'/api/users'
  }
  constructor(){
    this.app = express();
    this.port =process.env.PORT || '8000';
    // /middlewares
    this.middlewares();
    // /definir rutas
    this.routes();
  }

  routes(){
    this.app.use(this.apiPath.users,userRoutes);
  }

  middlewares(){
    // conf cors
    this.app.use(cors());
    // /lectura del body
    this.app.use(express.json());

    // carpeta publica
    this.app.use(express.static('public'));

  }

  listen(){
    this.app.listen(this.port,()=>{
      console.log(`Server running on port ${this.port} http://localhost/${this.port}`);
    })
  }
}

export default Server;