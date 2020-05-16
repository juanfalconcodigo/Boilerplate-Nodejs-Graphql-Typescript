import {Pool,createPool} from 'mysql2/promise';
import { BATABASE_NAME } from './environment';

const connect=async():Promise<Pool>=>{
    const pool = await createPool({
        host: 'localhost',
        user: 'root',
        database: BATABASE_NAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
      });
    return pool;
}

export default connect;