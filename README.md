# node-typescript-squelze-ODM-mysql-express
servidor rest con typescript ts-server

### Temas

```
  Creación de proyectos con TypeScript

  Configurar Express con TypeScript

  Conectarnos a MySQL desde Node

  Crear un CRUD usando Sequelize - ODM (Parecido a Mongoose)

```

### crear servidor con typescript e instalaciones

```
  npm init -y
  tsc --init
  npm i tslint --save-dev
  npm i typescript --save-dev
  ./node_modules/.bin/tslint --init

  npm i express cors dotenv
  npm i --save-dev @types/express
  npm i nodemon --save-dev
  npm i --save-dev @types/cors

  npm install --save sequelize
  npm install --save mysql2
  
```

### orrer proyecto

```
  tsc --watch
  node dist/app.js

  nodemon index.ts
```

### lista de servicios en mac

```
  brew services list  
  brew services stop mariadb
```