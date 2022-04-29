import express,{Application} from 'express';
import  userRoutes from '../routes/user.routes'
class Server{

  private app :Application;
  private port: string;
  private apiPath={
    users:'/api/users'
  }
  constructor(){
    this.app = express();
    this.port =process.env.PORT || '8000';
    // /definir rutas
    this.routes()
  }

  routes(){
    this.app.use(this.apiPath.users,userRoutes);
  }

  listen(){
    this.app.listen(this.port,()=>{
      console.log(`Server running on port  ${this.port} http://localhost/${this.port}`);
    })
  }
}

export default Server;