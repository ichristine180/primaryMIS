import "regenerator-runtime";
import express from "express";
import bodyparser from "body-parser";
import CREATETABLE from "./database/migrations/tables";
import dotenv from "dotenv";
import Auth from "./routers/Auth";
import Students from "./routers/Students";
import {runQuery} from './database/migrations/tables'
import { createPointTable } from "./database/queries/tables";
dotenv.config();
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
const PORT = process.env.PORT || 7890;
const env = process.env.NODE_ENV;
CREATETABLE.createTables["all"]();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//calling all routers
app.use(Auth);
app.use(Students);
app.listen(PORT, () => {
  console.log(`up and running on PORT ${PORT} in ${env} environment`);
});
export default app;
