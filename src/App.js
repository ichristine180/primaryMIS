import 'regenerator-runtime';
import express from 'express';
import bodyparser from 'body-parser';
import tables from './database/migrations/tables';
import dotenv from 'dotenv';
import Auth from './routers/Auth';
dotenv.config();
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
const PORT = process.env.PORT || 3000;
const env = process.env.NODE_ENV;
if(env !== 'test'){
tables.createTables['all']();
}
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  //calling all routers
app.use(Auth);
  app.listen(PORT,()=>{
      console.log(`up and running on PORT ${PORT}`);
  })
  export default app;