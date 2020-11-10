import dotenv from 'dotenv';
dotenv.config();
const config = {};

config.development = {
connectionString:  process.env.DEV_DATABASE_URL,
};
export default config;