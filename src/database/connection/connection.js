import {Client, Pool} from 'pg';
import dotenv from 'dotenv';
dotenv.config();

import config from './config';

class Connection {
constructor(){
    this.getPoolConnection = () => new Pool(config['development']);
}
}

export default new Connection();