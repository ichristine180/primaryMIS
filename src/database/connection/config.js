import dotenv from "dotenv";
dotenv.config();
const config = {};

config.development = {
  host: process.env.SERVER,
  port: process.env.DB_PORT,
  database: process.env.DB,
  user: process.env.USER,
  password: process.env.PASSWORD,
};
export default config;
