import {Client} from 'pg';
import dotenv from 'dotenv';
dotenv.config();

import config from './config';

class Connection {
constructor(){
    this.getPoolConnection = () => new Client(config['development']);
}
}

export default new Connection();